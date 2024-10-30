package chat_friend;

public class Message {
    String type;    // getFriends, friendList, sendMessage
    String to;      // userName
    String message; // message

    public Message(String type, String to, String message) {
        this.type = type;
        this.to = to;
        this.message = message;
    }

    @Override
    public String toString() {
        return type+"/"+to+"/"+message;
    }
}
