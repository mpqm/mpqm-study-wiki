package chat_oneToone;


import java.io.IOException;
import java.net.Socket;

public class ChatClient {
    public static void main(String[] args) {
        try {
            Socket clientSocket = new Socket("172.30.1.60", 80);
            // 채팅을 수신하는 쓰레드 객체 생성 및 시작
            ChatRT chatRT = new ChatRT(clientSocket);
            chatRT.start();
            // 채팅을 전송하는 쓰레드 객체 생성 및 시작
            ChatWT chatWT = new ChatWT(clientSocket);
            chatWT.start();
        } catch (IOException e) { throw new RuntimeException(e); }
    }
}