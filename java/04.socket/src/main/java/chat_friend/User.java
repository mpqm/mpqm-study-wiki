package chat_friend;

import java.net.Socket;

public class User {
    String name;
    Socket socket;

    User(String name, Socket socket) {
        this.name = name;
        this.socket = socket;
    }
}
