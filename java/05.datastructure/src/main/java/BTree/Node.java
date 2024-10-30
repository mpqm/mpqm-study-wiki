package BTree;

import java.util.HashMap;
import java.util.Map;


// ex) 차수가 3일때
public class Node {
    // 노드는 최대 M개의 자식 노드를 가질 수 있다. -> 3
    // 노드에는 최대 M-1개의 KEY를 가질 수 있다. -> 2
    // 각 노드는 최소 ⌈M/2⌉개의 자식 노드를 가진다. (루트 노드와 leaf 노드 제외) -> 2
    //각 노드는 최소 ⌈M/2⌉-1개의 키를 가진다. (루트 노드 제외) -> 1
    // 트리의 차수
    Integer maxKey;
    Integer m;
    // 노드가 가질 수 있는 최대 자식 노드의 수 -> m
    Integer maxChilds;
    // 노드가 가질 수 있는 최소 자식 노드의 수 -> [m/2]
    Integer minChilds;
    // 노드가 가질 수 있는 최소 자식 노드의 수
    // 자식노드들을 가리키는 childpointers의 노드 배열
    // 인덱스 0일때 왼쪽 자식 노드
    // 인덱스 1일때 중간 자식 노드
    // 인덱스 2일때 오른쪽 자식 노드
    Node[] childPointers;
    // 노드가 가질 수 있는 키, 데이터값을 저장하는 map 구조
    // 노드에 KEY들은 항상 오름차순 정렬된 상태로 저장됨
    HashMap<Integer, Integer> map;

    public Node(Integer m){
        this.map = new HashMap<Integer, Integer>();
        this.m = m;
        this.maxChilds = m;
        this.minChilds = (int) Math.ceil(m / 2.0) - 1;
        this.childPointers = new Node[maxChilds];
        this.maxKey = m-1;
    }

    public Integer getMaxKey() {
        return maxKey;
    }

    public void insertKey(Integer key, Integer value){
        this.getMap().put(key, value);
    }

    public Integer getMaxChilds() {
        return maxChilds;
    }

    public void setMaxChilds(Integer maxChilds) {
        this.maxChilds = maxChilds;
    }

    public Integer getM() {
        return m;
    }

    public void setM(Integer m) {
        this.m = m;
    }

    public Integer getMinChilds() {
        return minChilds;
    }

    public void setMinChilds(Integer minChilds) {
        this.minChilds = minChilds;
    }

    public HashMap<Integer, Integer> getMap() {
        return map;
    }

    public void setMap(HashMap<Integer, Integer> map) {
        this.map = map;
    }

    public Node[] getChildPointers() {
        return childPointers;
    }

    public void setChildPointers(Node[] childPointers) {
        this.childPointers = childPointers;
    }
}
