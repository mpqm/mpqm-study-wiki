package chat_friend;

import java.io.*;
import java.net.Socket;
import java.util.Scanner;

public class ChatWT extends Thread {
    Socket socket;
    OutputStream outputStream;
    PrintStream printStream;
    public ChatWT(Socket socket) throws IOException {
        this.socket = socket;
        this.outputStream = socket.getOutputStream();
        this.printStream = new PrintStream(outputStream);
    }
    @Override
    public void run() {
        Scanner sc = new Scanner(System.in);
        while (true) {
            try {
                System.out.println("1. 친구 목록보기");
                System.out.print("메뉴를 선택 해주세요 : ");
                String menu = sc.nextLine();
                if (menu.equals("1")) {
                    Message getFriendsMessage = new Message("getFriends", "-", "-");
                    printStream.println(getFriendsMessage.toString());
                    String to = sc.nextLine();
                    String message = "";
                    while(true){
                        if(message.equals("exit")) {
                            System.out.println("친구를 선택 해주세요 : ");
                            to = sc.nextLine();
                        }
                        try {
                            System.out.print(to + "에게 보낼 메시지 입력 : ");
                            message = sc.nextLine();
                            Message sendMessage = new Message("sendMessage", to, message);
                            printStream.println(sendMessage.toString());
                        } catch (Exception e) { e.printStackTrace(); }
                    }
                }
            } catch (Exception e) { e.printStackTrace(); }
        }
    }
}
