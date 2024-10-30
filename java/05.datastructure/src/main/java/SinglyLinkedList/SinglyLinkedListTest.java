package SinglyLinkedList;

public class SinglyLinkedListTest {
    public static void main(String[] args) {
        SinglyLinkedList sll = new SinglyLinkedList();
        sll.insertLast(10);
        sll.insertLast(20);
        sll.insertLast(30);
        sll.insertFirst(30); // 30 10 20 30
        sll.insert(40, 0); // 40 30 10 20 30
        sll.insert(40, 4); // 40 30 10 20 30 40
        sll.insert(40, 2); // 40 30 40 10 20 30 40
        sll.delete(5); // 40 30 40 10 20 40
        sll.deleteFirst(); // 30 40 10 20 40
        sll.deleteLast(); // 30 40 10 20
        sll.print();
    }
}
