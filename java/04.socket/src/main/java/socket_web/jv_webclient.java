package socket_web;

import java.io.*;
import java.net.Socket;

public class jv_webclient {
    public static void main(String[] args){
        try {
            // 172.30.1.60 IP 주소와 80번 포트로 소켓 연결을 시도
            Socket clientSocket = new Socket("172.30.1.60", 9999);

            // 소켓의 출력 스트림을 가져와서 PrintStream 객체로 래핑
            OutputStream outputStream = clientSocket.getOutputStream();
            PrintStream printStream = new PrintStream(outputStream);

            // HTTP GET 요청을 서버로 전송
            printStream.println("GET / HTTP/1.1");
            printStream.println("Host: 172.30.1.60");
            printStream.println(" ");

            // 소켓의 입력 스트림을 가져와서 InputStreamReader와 BufferedReader로 래핑
            InputStream inputStream = clientSocket.getInputStream();
            InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
            BufferedReader bufferedReader = new BufferedReader(inputStreamReader);

            // 서버로부터 응답을 한 줄씩 읽어와서 출력
            String result;
            while((result = bufferedReader.readLine()) != null) { System.out.println(result); }
            clientSocket.close();
        } catch (IOException e) {
            throw new RuntimeException(e); }
    }
}

