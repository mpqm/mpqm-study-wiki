package chat_friend;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.Socket;

public class ChatRT extends Thread{
    Socket socket;
    InputStream inputStream;
    InputStreamReader reader;
    BufferedReader br;
    public ChatRT(Socket socket) throws IOException {
        this.socket = socket;
        this.inputStream = this.socket.getInputStream();
        this.reader = new InputStreamReader(inputStream, "UTF-8");
        this.br = new BufferedReader(reader);
    }
    @Override
    public void run() {
        String result;
        while(true){
            try {
                result = br.readLine();
                Message getMessage = new Message(result.split("/")[0], result.split("/")[1], result.split("/")[2]);
                System.out.println("클라이언트가 받은 메시지 : " + getMessage.toString());
                if(getMessage.type.equals("friendList")) {
                    System.out.println("현재 접속중인 사용자");
                    System.out.println(result.split("/")[2]);
                    System.out.println("친구를 선택 해주세요 : ");
                } else if(getMessage.type.equals("sendMessage")){
                    System.out.println();
                    System.out.println("받은 메시지 : " + getMessage.message);
                }
            } catch (Exception e) {  e.printStackTrace(); }
        }
    }
}
