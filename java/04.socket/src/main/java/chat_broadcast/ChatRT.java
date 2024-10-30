package chat_broadcast;

import java.io.*;
import java.net.Socket;

public class ChatRT extends Thread {
    Socket socket;
    InputStream inputStream;
    InputStreamReader reader;
    BufferedReader br;
    // 생성자: 클라이언트 소켓을 받아와 초기화
    public ChatRT(Socket socket){ this.socket = socket; }

    @Override
    public void run() {
        try {
            // 소켓으로부터 입력 스트림을 가져옴
            this.inputStream = this.socket.getInputStream();
            // 입력 스트림을 InputStreamReader로 변환
            this.reader = new InputStreamReader(this.inputStream);
            // InputStreamReader를 BufferedReader로 감싸서 한 줄씩 읽을 수 있도록 함
            this.br = new BufferedReader(this.reader);
            // 계속해서 메시지를 읽어와 출력
            while(true){
                String result;
                while((result = br.readLine()) != null){ System.out.println(result); }
            }
        }
        catch (IOException e) { throw new RuntimeException(e); }
    }
}
