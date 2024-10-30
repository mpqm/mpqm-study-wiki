package chat_broadcast;

import java.net.ServerSocket;
import java.net.Socket;

public class ChatBroadServer {
    // 어느 객체에서나 공유가 가능한 소켓을 여러개 저장할 수 있는 변수 생성
    static Socket[] sockets;
    // 어느 객체에서나 공유가 현재 사용자의 수를 저장할 수 있는 변수 생성
    static Integer userCount;
    public static void main(String[] args) {
        // 서버 소켓을 저장할 변수 생성
        ServerSocket serverSocket;
        // 소켓을 10개 저장할 수 있는 배열을 생성해서 변수에 저장
        sockets = new Socket[10];
        // 현재 사용자의 수에 0저장
        userCount = 0;
        try{
            serverSocket = new ServerSocket(80);
            while(true) {
                // 서버 소켓을 통해 클라이언트 접속을 허용해서 클라이언트 소켓을 받아서 배열의 현재 사용자 수번째에 저장
                sockets[userCount] = serverSocket.accept();
                // 중계용쓰레드를 생성
                ChatBT broadThread = new ChatBT(sockets[userCount]);
                // 중계용쓰레드 실행
                broadThread.start();
                // 사용자의 수 1증가
                userCount = userCount + 1;
            }
        }
        catch (Exception e) { e.printStackTrace(); }
    }
}
