package socket_basic;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
public class jv_serversocket {
    public static void main(String[] args){
        // 소켓 통신: 원격 컴퓨터에서 실행 중인 다른 프로그램과의 통신 통로를 열어주는 스트림, OSI 모델의 4계층(전송 계층)까지 담당
        try {
            // 서버 소켓을 생성하고 포트를 지정해 listen 상태로 만듦
            ServerSocket serverSocket = new ServerSocket(9999);
            // 클라이언트 소켓을 기다림, 하나의 서버 소켓에 여러 개의 클라이언트 소켓을 만들 수 있음
            Socket clientSocket = serverSocket.accept();
            // 연결된 클라이언트의 IP 주소를 출력
            System.out.println(clientSocket.getInetAddress());
        } catch (IOException e) {
            // IOException이 발생하면 이를 RuntimeException으로 변환하여 던짐
            throw new RuntimeException(e);
        }
    }
}

