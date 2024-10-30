package chat_friend;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;

public class ChatFriendServer {
    static User[] users;
    static Integer count;

    public static void main(String[] args) {
        users = new User[10];
        count = 0;
        try {
            ServerSocket serverSocket = new ServerSocket(999);
            while(true) {
                Socket clientSocket = serverSocket.accept();
                InputStream inputStream = clientSocket.getInputStream();
                InputStreamReader reader = new InputStreamReader(inputStream, "UTF-8");
                BufferedReader br = new BufferedReader(reader);
                String name = br.readLine();
                User user = new User(name, clientSocket);
                users[count] = user;
                ChatFT chatFT = new ChatFT(user);
                chatFT.start();
                count = count + 1;
            }
        } catch (IOException e) { throw new RuntimeException(e); }
    }
}
