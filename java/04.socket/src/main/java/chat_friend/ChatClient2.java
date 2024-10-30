package chat_friend;

import java.io.IOException;
import java.io.PrintStream;
import java.net.Socket;
import java.util.Scanner;

public class ChatClient2 {
    public static void main(String[] args) {
        Socket clientSocket;
        Integer menu;
        Scanner sc = new Scanner(System.in);
        try {
            clientSocket = new Socket("172.30.1.60", 999);
            System.out.print("사용하실 이름을 입력해주세요 : ");
            String name;
            name = sc.nextLine();
            new PrintStream(clientSocket.getOutputStream()).println(name);
            ChatRT readThread = new ChatRT(clientSocket);
            readThread.start();
            ChatWT writeThread = new ChatWT(clientSocket);
            writeThread.start();
        } catch (IOException e) { throw new RuntimeException(e); }
    }
}
