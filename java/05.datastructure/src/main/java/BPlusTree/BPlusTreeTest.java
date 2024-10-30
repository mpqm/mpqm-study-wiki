package BPlusTree;

public class BPlusTreeTest {
    public static void main(String[] args) {
        BPlusTree bpt = new BPlusTree(3);
        bpt.insert(1, 1);
        bpt.insert(2, 2);
        bpt.insert(3, 3);
        bpt.insert(4, 4);
        bpt.insert(5, 5);
        bpt.printTree();
    }
}
