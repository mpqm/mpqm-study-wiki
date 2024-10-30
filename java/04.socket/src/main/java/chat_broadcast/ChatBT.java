package chat_broadcast;

import java.io.*;
import java.net.Socket;

public class ChatBT extends Thread{
    Socket socket;
    // 생성자: 클라이언트 소켓을 받아와 초기화
    ChatBT(Socket socket) { this.socket = socket; }
    @Override
    public void run() {
        try {
            // 클라이언트 소켓으로 인풋 스트림 생성
            InputStream inputStream = this.socket.getInputStream();
            // 인풋스트림으로 리더 생성
            InputStreamReader reader = new InputStreamReader(inputStream, "UTF-8");
            // 리더로 버퍼드리더 생성
            BufferedReader br = new BufferedReader(reader);
            // 글자를 저장할 수 있는 변수 생성
            String message;
            // 무한 반복
            while(true) {
                // 버퍼드리더로 데이터 받은 글자를 변수에 저장
                message = br.readLine();
                // 현재 서버에 저장된 사용자의 수만큼 반복
                for (int i = 0; i < ChatBroadServer.userCount; i++) {
                    // 중계  서버에 있는 어느 객체에서나 공유가 가능한 소켓을 여러개 저장할 수 있는 변수에 저장된 여러 소켓 중 현재 반복 순서의 소켓을 변수에 저장
                    Socket toClient;
                    toClient = ChatBroadServer.sockets[i];
                    // 현재 스레드에 소켓과 중계 서버에서 가져온 소켓이 일치하면 메시지 보내지 말고 다음 반복문 실행
                    if(this.socket.equals(toClient)) { continue; }
                    // 중계 서버에서 가져온 소켓으로 메시지를 보냄
                    OutputStream outputStream = toClient.getOutputStream();
                    PrintStream printStream = new PrintStream(outputStream);
                    printStream.println(message);
                }
            }
        } catch (IOException e) { throw new RuntimeException(e); }
    }
}