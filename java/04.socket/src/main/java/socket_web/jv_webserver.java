package socket_web;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class jv_webserver {
    public static void main(String[] args) {
        try {
            // 80번 포트로 서버 실행
            ServerSocket serverSocket = new ServerSocket(9999);
            // 클라이언트가 접속하면 접속을 허용하는 코드, clientSocket에 클라이언트와의 연결 정보 저장
            Socket clientSocket = serverSocket.accept();
            // 클라이언트로부터 들어오는 데이터를 읽기 위한 스트림 설정
            InputStream inputStream = clientSocket.getInputStream();
            InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
            BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
            // 클라이언트로부터의 첫 번째 요청 라인을 읽음
            String result = bufferedReader.readLine();
            String total = "";
            try {
                // 파일과의 통로를 열어서 바이트 단위로 데이터를 읽어오는 객체, split()은 result에 저장된 글자를 " " 공백으로 자름
                FileInputStream fileInputStream = new FileInputStream("c:\\workspace\\zzz\\index.html");
                // 글자 단위로 데이터를 읽어오는 스트림, UTF-8과 같은 글자 인코딩 형식 지정 가능`
                InputStreamReader fileInputStreamReader = new InputStreamReader(fileInputStream, "UTF-8");
                // 데이터를 하나 읽고 바로 하나를 처리하는게 아니라 버퍼에 모았다가 일정 크기가 되면 처리
                BufferedReader fileBufferReader = new BufferedReader(fileInputStreamReader);
                String fileResult;
                // 파일의 내용을 한 줄씩 읽어서 total 변수에 저장
                while ((fileResult = fileBufferReader.readLine()) != null) { total += fileResult; }
                System.out.println(total);
                // 파일과 관련된 스트림을 닫음
                fileBufferReader.close();
                fileInputStreamReader.close();
                fileInputStream.close();
            } catch (Exception e) { e.printStackTrace(); }
            // 클라이언트로 응답을 보내기 위한 스트림 설정
            OutputStream outputStream = clientSocket.getOutputStream();
            PrintStream printStream = new PrintStream(outputStream);
            // HTTP 응답 헤더를 작성 하고 응답 본문에 읽어온 파일 내용을 작성
            printStream.println("HTTP/1.1 200 OK");
            printStream.println("Content-Length: " + total.length());
            printStream.println("Content-Type: text/html");
            printStream.println("");
            printStream.println(total);
            printStream.println("");
            System.out.println("Ddd");
        }
        catch (IOException e) { throw new RuntimeException(e); }
    }
}

