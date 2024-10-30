package chat_oneToone;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class ChatServer {
    public static void main(String[] args) {
        try {
            // 서버 소켓 생성 및 80번 포트에서 클라이언트의 연결 요청을 기다림
            ServerSocket serverSocket = new ServerSocket(80);
            // 클라이언트의 연결 요청 수락
            Socket clientSocket = serverSocket.accept();
            // 클라이언트와의 채팅을 수신하는 쓰레드 생성 및 시작
            ChatRT chatRT = new ChatRT(clientSocket);
            chatRT.start();
            // 클라이언트와의 채팅을 전송하는 쓰레드 생성 및 시작
            ChatWT chatWT = new ChatWT(clientSocket);
            chatWT.start();
        }
        catch (IOException e) { throw new RuntimeException(e); }
    }
}
