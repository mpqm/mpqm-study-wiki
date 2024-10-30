package SinglyLinkedList;

public class Node {
    private Integer data;
    private Node next;

    public Node (Integer input){
        this.data = input;
        this.next = null;
    }
    public Integer getData() {
        return data;
    }
    public void setData(Integer data) {
        this.data = data;
    }
    public Node getNext() {
        return next;
    }
    public void setNext(Node next) {
        this.next = next;
    }
}
