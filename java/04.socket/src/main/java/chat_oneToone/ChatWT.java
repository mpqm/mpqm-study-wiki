package chat_oneToone;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintStream;
import java.net.Socket;
import java.util.Scanner;

public class ChatWT extends Thread {
    Socket socket;
    OutputStream outputStream;
    PrintStream printStream;
    BufferedReader bufferedReader;
    // 생성자: 클라이언트 소켓을 받아와 초기화
    public ChatWT(Socket socket){
        this.socket = socket;
    }
        @Override
        public void run() {
            try {
                // 클라이언트 소켓으로부터 출력 스트림을 가져와 PrintStream으로 래핑
                this.outputStream = this.socket.getOutputStream();
                this.printStream = new PrintStream(outputStream);
                // 사용자 입력을 받기 위한 Scanner 객체 생성
                Scanner sc = new Scanner(System.in);
                // 사용자에게 메시지 입력을 요청하고 입력 받고 전송
                while(true) {
                    String message = sc.nextLine();
                    printStream.println(message);
                }
            }
            catch (IOException e) { throw new RuntimeException(e); }
        }
}
