package Astar;

import java.util.ArrayList;
import java.util.List;

public class Astar {
    int[][] map;
    int mapRowSize;
    int mapColSize;
    AstarNode startNode;
    AstarNode endNode;
    List<AstarNode> obsNodes; // 장애물 노드임
    List<AstarNode> opendList; // 열린 목록
    List<AstarNode> closedList; // 닫힌 목록

    public Astar(int[][] map) {
        this.map = map;
        this.mapRowSize = map[0].length;
        this.mapColSize = map.length;
        opendList = new ArrayList<>();
        closedList = new ArrayList<>();
        obsNodes = new ArrayList<>();

        for(int i = 0; i < this.mapColSize; i++){
            for(int j = 0; j < this.mapRowSize; j++){
                if (this.map[i][j] == 1) {
                    AstarNode astarNode = new AstarNode(j, i);
                    startNode = astarNode;
                } else if (this.map[i][j] == 2) {
                    AstarNode astarNode = new AstarNode(j, i);
                    endNode = astarNode;
                }
            }
        }
    }

    public boolean checkNode(AstarNode node){
        if(node.getX() == 0 ||
           node.getX() == 0 && node.getY() == 0 ||
           node.getX() == 0 && node.getY() == mapColSize ||
           node.getY() == 0 ||
           node.getY() == 0 && node.getX() == mapRowSize ||
           node.getX() == mapRowSize ||
           node.getX() == mapRowSize && node.getY() == mapColSize ||
           node.getY() == mapColSize ||
           this.map[node.getY()][node.getX()] == 3) {
            return false;
        }
        for(int i = 0; i < closedList.size(); i++){
            if(closedList.get(i).getX() == node.getX() &&
               closedList.get(i).getY() == node.getY()){
                return false;
            }
        }
        return true;
    }

    public AstarNode chooseNextNode(){
        for(int i = 0; i < opendList.size(); i++){
            AstarNode bmp;
            for(int j = 0 ; j < opendList.size(); j++){
                if (j+1 == opendList.size()) { break; }
                if(opendList.get(j).getH() > opendList.get(j+1).getH()){
                    bmp = opendList.get(j);
                    opendList.set(j, opendList.get(j+1));
                    opendList.set(j+1, bmp);
                }
                else { continue; }
            }
        }
        AstarNode ddd = opendList.get(0);
        opendList.remove(0);
        return ddd;
    }

    public void appendOpendList(AstarNode node){
        int xPlus = node.getX() + 1;
        int xMinus = node.getX() - 1;
        int yPlus = node.getY() + 1;
        int yMinus = node.getY() - 1;
        int x = node.getX();
        int y = node.getY();
        AstarNode curNodeU = new AstarNode(node, endNode, x, yMinus, 10);
        AstarNode curNodeUR = new AstarNode(node, endNode, xPlus, yMinus, 14);
        AstarNode curNodeUL = new AstarNode(node, endNode, xMinus, yMinus, 14);
        AstarNode curNodeR = new AstarNode(node, endNode, xPlus, y, 10);
        AstarNode curNodeL = new AstarNode(node, endNode, xMinus, y, 10);
        AstarNode curNodeD = new AstarNode(node, endNode, x, yPlus, 14);
        AstarNode curNodeDR = new AstarNode(node, endNode, xPlus, yPlus, 14);
        AstarNode curNodeDL = new AstarNode(node, endNode, xMinus, yPlus, 14);
        if(checkNode(curNodeU)){ this.opendList.add(curNodeU); }
        if(checkNode(curNodeUR)){ this.opendList.add(curNodeUR); }
        if(checkNode(curNodeUL)){ this.opendList.add(curNodeUL); }
        if(checkNode(curNodeR)){ this.opendList.add(curNodeR); }
        if(checkNode(curNodeL)){ this.opendList.add(curNodeL); }
        if(checkNode(curNodeD)){ this.opendList.add(curNodeD); }
        if(checkNode(curNodeDR)){ this.opendList.add(curNodeDR); }
        if(checkNode(curNodeDL)){ this.opendList.add(curNodeDL); }
    }

    public void resultPrint(){
        AstarNode node = closedList.get(closedList.size()-1);
        while(node != null){
            System.out.println("["+node.getX()+' '+node.getY()+"] ");
            node = node.getParent();
        }
    }

    public void search(){
        AstarNode nextNode = this.startNode;
        closedList.add(this.startNode);
        appendOpendList(this.startNode);
        while(true){
            nextNode = chooseNextNode();
            if(checkNode(nextNode)){
                closedList.add(nextNode);
            }
            appendOpendList(nextNode);
            System.out.println("\n");
            if(nextNode.getX() == endNode.getX() && nextNode.getY() == endNode.getY()){ break; }
        }
        resultPrint();
    }
}
