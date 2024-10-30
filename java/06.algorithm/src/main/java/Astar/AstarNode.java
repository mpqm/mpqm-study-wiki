package Astar;

public class AstarNode {
    AstarNode parent;
    int X;
    int Y;
    int F;
    int G;
    int H;
    int W;

    // 초기노드, 장애물 노드임
    public AstarNode(int x, int y) {
        this.X = x;
        this.Y = y;
    }
    // 지나가는 노드임
    public AstarNode(AstarNode parent, AstarNode endNode, int x, int y, int w) {
        this.parent = parent;
        this.X = x;
        this.Y = y;
        this.W = w;
        this.F = calF(this);
        this.G = calG(endNode, this);
        this.H = F+G;
    }

    public int calG(AstarNode toNode, AstarNode fromNode){
        return (Math.abs(fromNode.getX()-toNode.getX()) + Math.abs(fromNode.getY()-toNode.getY()))*10;
    }

    public int calF(AstarNode node){
        AstarNode parentNode = node.getParent();
        int sum = node.getW();
        while(parentNode.getF() != 0){
            sum += parentNode.getW();
            parentNode = parentNode.getParent();
        }
        return sum;
    }

    public AstarNode getParent() {
        return parent;
    }

    public int getW() {
        return W;
    }

    public void setW(int w) {
        W = w;
    }

    public void setParent(AstarNode parent) {
        this.parent = parent;
    }

    public int getX() {
        return X;
    }

    public void setX(int x) {
        X = x;
    }

    public int getY() {
        return Y;
    }

    public void setY(int y) {
        Y = y;
    }

    public int getF() {
        return F;
    }

    public void setF(int f) {
        F = f;
    }

    public int getG() {
        return G;
    }

    public void setG(int g) {
        G = g;
    }

    public int getH() {
        return H;
    }

    public void setH(int h) {
        H = h;
    }
}
