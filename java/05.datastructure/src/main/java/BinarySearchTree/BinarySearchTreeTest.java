package BinarySearchTree;

public class BinarySearchTreeTest {
    public static void main(String[] args) {
        BinarySearchTree binarySearchTree = new BinarySearchTree();
        binarySearchTree.add(10);
        binarySearchTree.add(20);
        binarySearchTree.add(9);
        binarySearchTree.add(6);
        binarySearchTree.add(7);
        binarySearchTree.add(8);
        binarySearchTree.add(4);
        binarySearchTree.add(3);
        binarySearchTree.add(15);
        binarySearchTree.add(14);
        binarySearchTree.add2(16);
        binarySearchTree.add2(25);
        binarySearchTree.add2(24);
        binarySearchTree.add2(26);
        binarySearchTree.remove(4);
        binarySearchTree.remove(6);
        binarySearchTree.remove(15);
        binarySearchTree.remove(25);
      TreePrinter.print(binarySearchTree.root);
    }
}
