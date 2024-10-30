package socket_basic;

import java.io.IOException;
import java.net.Socket;

public class jv_clientsocket {
    public static void main(String[] args){
        // 서버의 IP 주소와 포트 번호를 이용해 소켓을 생성하여 서버에 연결 시도
        try { Socket clientSocket = new Socket("172.30.1.60", 9999); }
        catch (IOException e) { throw new RuntimeException(e); }
    }
}
