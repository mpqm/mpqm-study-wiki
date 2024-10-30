import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: 'chat' })
export class ChatGateway {
  @WebSocketServer() server: Server;
  @SubscribeMessage('message')
  handleMessage(socket: Socket, data: any): void {
    const { message, nickname } = data;
    socket.broadcast.emit('message', `${nickname}: ${message}`);
  }
}
@WebSocketGateway({ namespace: 'room' })
export class RoomGateway {
  constructor(private readonly chatGateway: ChatGateway) {}
  rooms = [];
  @WebSocketServer() server: Server;
  @SubscribeMessage('createRoom')
  handleMessage(@MessageBody() data) {
    const { nickname, room } = data;
    this.chatGateway.server.emit('notice', {
      message: `${nickname}가 ${room} 생성`,
    });
    this.rooms.push(room);
    this.server.emit('rooms', this.rooms);
  }

  @SubscribeMessage('joinRoom')
  handleJoinRoom(@MessageBody() data, @ConnectedSocket() socket: Socket) {
    const { nickname, room, toLeaveRoom } = data;
    console.log(data);
    socket.leave(toLeaveRoom);
    this.chatGateway.server.emit('notice', {
      message: `${nickname}님이 ${room}에 입장 `,
    });
    socket.join(room);
  }

  @SubscribeMessage('message')
  handleMessageToRoom(@MessageBody() data, @ConnectedSocket() socket: Socket) {
    const { nickname, room, message } = data;
    console.log(data);
    socket.broadcast.to(room).emit('message', {
      message: `${nickname}: ${message}`,
    });
  }
}
