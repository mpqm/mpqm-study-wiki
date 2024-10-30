package BinarySearchTree;

public class Node implements TreePrinter.PrintableNode {
    private Integer data;
    private Node left;
    private Node right;

    public Node(Integer data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    @Override
    public String getText() {
        return "["+data+"]";
    }
    @Override
    public Node getLeft() {
        return left;
    }
    @Override
    public Node getRight() {
        return right;
    }

    public Integer getData() {
        return data;
    }

    public void setData(Integer data) {
        this.data = data;
    }


    public void setLeft(Node left) {
        this.left = left;
    }


    public void setRight(Node right) {
        this.right = right;
    }
}
