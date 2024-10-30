package BinarySearchTree;

public class BinarySearchTree {
    public Node root;
    public BinarySearchTree() {
        this.root = null;
    }
    // 반복문을 사용해서 숫자 하나를 전달받고 트리에 추가하는 기능
    public void add(Integer data) {
        Node node = new Node(data); // 노드 객체를 생성해서 데이터를 저장
        if (this.root == null) { // 루트 노드가 널값이면
            this.root = node;
        } else { // 그렇지 않으면
            Node cur_node = this.root; // 현재 노드에 루트 노드를 저장
            while (true) {
                // 오른쪽 감
                if (cur_node.getData() < node.getData()) {
                    if (cur_node.getRight() == null) {
                        cur_node.setRight(node);
                        break;
                    } else {
                        cur_node = (Node) cur_node.getRight();
                    }
                } // 왼쪽 감
                else {
                    if (cur_node.getLeft() == null) {
                        cur_node.setLeft(node);
                        break;
                    } else {
                        cur_node = (Node) cur_node.getLeft();
                    }
                }
            }
        }
    }
    // 재귀문을 사용해서 숫자 하나를 전달받고 트리에 추가하는 기능
    public void add2(Integer data) {
        if (this.root == null) { // 만약에 root가 null이면
            Node newNode = new Node(data); // 객체 생성해서 데이터 저장
            this.root = newNode; // root에 생성한 객체 저장
        }
        else { // 그렇지 않으면
            this.addRecur(this.root, data);
        }
    }
    public Node addRecur(Node node, Integer data){
        if(node == null){ // 만약에 특정노드가 비어있으면
            Node newNode = new Node(data); // 노드 객체를 생성해서 데이터를 저장
            return newNode; // 생성한 노드 반환
        }
        if (node.getData() < data) { // 만약에 데이터가 특정 노드의 데이터보다 크면
            node.setRight(addRecur(node.getRight(), data)); // 특정 노드의 오른쪽에 특정 노드의 오른쪽 노드에 데이터를 추가해서 반환 받은 노드를 저장
        } else{ // 그렇지 않고 만약에 데이터가 특정 노드의 데이터보다 작으면
            node.setLeft(addRecur(node.getLeft(), data)); // 특정 노드의 왼쪽에 특정 노드의 왼쪽에 데이터를 추가해서 반환 받은 노드를 저장
        }
        return node;
    }

    public void remove(Integer data) {
        Node target = this.root; // target 노드는 root부터 시작함
        Node parents = null; // target 노드의 부모노드
        if(target != null) {
            while(true) {
                if(target.getData() == data) { break;} // 현재 target 노드가 삭제하려는 노드값에 도달하면 탈출
                if(data > target.getData()) { // 만약 현재 target 노드의 값이 삭제하려는 값보다 작다면
                    parents = target;
                    target = target.getRight(); // 오른쪽 이동
                }
                if(data < target.getData()) { // 만약 현재 target 노드의 값이 삭제하려는 값보다 크다면
                    parents = target;
                    target = target.getLeft(); // 왼쪽 이동
                }
            }
            // 자식노드가 없을 때 바로 삭제
            if(target.getLeft() == null && target.getRight() == null) {
                if(target.getData() > parents.getData()) { parents.setRight(null); } // 오른쪽일때
                if(target.getData() < parents.getData()) { parents.setLeft(null); } // 왼쪽일때
            }
            // 자식이 하나일 때 자식이 부모노드를 대체
            else if(target.getLeft() != null && target.getRight() == null) { // 오른쪽 자식노드만 있을때
                if(target.getData() > parents.getData()) { // 오른쪽
                    parents.setRight(target.getLeft());
                    target.setRight(null);
                }
                if(target.getData() < parents.getData()) { // 왼쪽
                    parents.setLeft(target.getLeft());
                    target.setLeft(null);
                }
            } else if(target.getLeft() == null && target.getRight() != null) { // 왼쪽 자식노드만 있을때
                if(target.getData() > parents.getData()) { // 오른쪽
                    parents.setRight(target.getRight());
                    target.setRight(null);
                }
                if(target.getData() < parents.getData()) { // 왼쪽
                    parents.setLeft(target.getRight());
                    target.setLeft(null);
                }
            }
            // 자식이 2개일 때 왼쪽의 서브트리에서 제일 큰 노드가 삭제되는 노드를 대체
            else {
                Node maximumNode = target.getLeft(); // 왼쪽 서브트리
                Node maximumNodesParent = target; // 초기값은 삭제하고자하는 노드
                while(maximumNode.getRight() != null) { // 오른쪽으로 내려갈때 널이 아니라면
                    maximumNodesParent = maximumNode; // 오른쪽으로 내려갈때의 부모 노드임
                    maximumNode = maximumNode.getRight(); // 오른쪽으로 내려감
                }
                if(!maximumNodesParent.equals(target)) { maximumNodesParent.setRight(maximumNode.getLeft()); }
                if(!target.getLeft().equals(maximumNode)) { maximumNode.setLeft(target.getLeft()); }
                maximumNode.setRight(target.getRight());
                if(parents == null) { this.root = maximumNode; }
                else {
                    if(target.getData() > parents.getData()) { parents.setRight(maximumNode); }
                    if(target.getData() < parents.getData()) { parents.setLeft(maximumNode); }
                }
            }
        }
    }
}


