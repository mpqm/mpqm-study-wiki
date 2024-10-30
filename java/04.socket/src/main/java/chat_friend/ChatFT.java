package chat_friend;

import java.io.*;

public class ChatFT extends Thread {
    User user;
    public ChatFT(User user) throws IOException { this.user = user; }
    @Override
    public void run() {
        try {
            InputStream is = user.socket.getInputStream();
            InputStreamReader isr = new InputStreamReader(is);
            BufferedReader bir = new BufferedReader(isr);
            while (true) {
                String result = bir.readLine();
                Message getMessage = new Message(result.split("/")[0], result.split("/")[1], result.split("/")[2]);
                System.out.println("서버가 받은 메시지 : " + getMessage.toString());
                if (getMessage.type.equals("getFriends")) { // getFriends, sendMessage
                    String userList = "-";
                    for (int i = 0; i < ChatFriendServer.count; i++) {
                        if (ChatFriendServer.users[i].socket.equals(this.user.socket)) { continue; }
                        userList = userList + ChatFriendServer.users[i].name + " ";
                    }
                    Message friendListMessage = new Message("friendList", "-", userList);
                    new PrintStream(this.user.socket.getOutputStream()).println(friendListMessage.toString());
                } else if (getMessage.type.equals("sendMessage")) {
                    Message sendMessage = new Message("sendMessage", getMessage.to, getMessage.message);
                    for (int i = 0; i < ChatFriendServer.count; i++) {
                        if(getMessage.to.equals(ChatFriendServer.users[i].name)) {
                            OutputStream outputStream = ChatFriendServer.users[i].socket.getOutputStream();
                            PrintStream printStream = new PrintStream(outputStream);
                            printStream.println(sendMessage.toString());
                        }
                    }
                }
            }
        } catch (IOException e) { throw new RuntimeException(e); }
    }
}
