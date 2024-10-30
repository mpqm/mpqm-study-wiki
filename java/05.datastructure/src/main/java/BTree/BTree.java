package BTree;

import java.util.HashMap;

public class BTree {
    Integer m;
    Node root; // 루트 노드

    // 생성자: 루트노드, 트리의 차수를 초기화함
    public BTree(Integer m) {
        this.root = null;
        this.m = m;
    }

    public void insert(Integer data){
        Node newNode = new Node(this.m);
        // 루트노드가 없다면
        if(this.root == null){  this.root = newNode; }
        // 순회해서 값을 넣을 자리를 찾아야한다.
        else{
            // 현재노드의 시작은 루트노드부터
            Node curNode = this.root;
            // 재귀
            insertRecur(curNode, data);
        }
    }

    public void insertRecur(Node curNode, Integer data){
        // 현재 노드의 자식 노드포인터 배열
        Node[] curNodeChildPointers = curNode.getChildPointers();
        // 현재 노드의 키를 저장하는 해시맵 테이블
        HashMap<Integer, Integer> curMap = curNode.getMap();
        // 현재 노드가 가지고 있는 해시맵의 크기보다 최대 키사이즈보다 작다면 현재 위치의 해시맵에 넣어야함
        if(curNode.getMap().size() < curNode.maxKey){
            // 현재 노드의 해시맵을 순회하면서
            for(int i = 0; i < curNode.getMaxKey(); i++){
                // i번째 해시맵 값이 널이면서 i-1번째 해시맵 값보다 크면 해시맵 사이즈보다 노드가 가질 수 있는 키사이즈가 작다면 넣음
                if(curMap.get(i) == null && curMap.get(i-1) < data && curMap.size() < curNode.getMaxKey()){
                    // 해시맵의 i+1번째에 data(key)집어넣음
                    curMap.put(i+1, data);
                    break;
                // 현재 노드의 맵 사이즈가 꽉 찼다면
                } else {
                    // 현재 노드의 맵의 최대값이
                    // 다음 자식 노드로 이동하거나, 분할함
//                    for(int j = 0; )
                    //
                }
            }
        }
        // 노드가 가르키는 자식노드포인터의 크기가 가질수있는 최대 자식노드수보다 작으면 현재 위치에 넣어야함
        else if(curNodeChildPointers.length < curNode.getMaxChilds()){
            // 자식노드 포인터를 순회하면서 그 노드의 해시값을 모두 순회하며 입력받은 데이터보다 작다면 거기에 넣음
            for(int i = 0; i < curNode.getMaxChilds(); i++){
                // i번째 자식 노드의 해시맵을 가져오는 변수
                HashMap<Integer, Integer> curNodeChildMap = curNodeChildPointers[i].getMap();
                for(int j = 0; i < curNode.getMaxKey(); j++){
                    // 만약에 j번째 키값이 데이터보다 작고 i번째 자식노드의 해시맵의 크기가 최대 키사이즈보다 작다면
                    if(curNodeChildMap.get(j) < data && curNodeChildMap.size() < curNode.getMaxKey()){
                        // 해시맵의 j+1번째에 data(key)집어넣음
                        curNodeChildMap.put(j+1, data);
                        break;
                    }else{
                        // 이제 분할 함 시발
                    }
                }
            }
        }
        // 현재 키테이블도 꽉찼고, 노드가 가르키는 자식노드포인터 리스트도 꽉찼다면
        else{

        }
    }
}
