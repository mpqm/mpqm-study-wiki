package SinglyLinkedList;

public class SinglyLinkedList {
    Node head; // 가장 먼저 추가한 노드를 저장하는 head라는 이름의 변수
    Node tail; // 마지막에 추가한 노드를 저장하는 tail이라는 이름의 변수
    public Integer cnt;
    // 연결리스트 처음에 생성할 때
    public SinglyLinkedList() {
        this.head = null; // head에 null을 저장
        this.tail = null; // tail에 null을 저장
        this.cnt = 0;
    }
    // 숫자를 하나 전달받아서 맨 처음에 추가하는 기능
    public void insertFirst(Integer data) {
        Node node = new Node(data); // 노드를 생성해서 전달받은 숫자를 저장
        if(this.head == null){ // 만약에 저장한 적이 없으면
            head = node; // head에 생성한 노드 저장
            tail = node; // tail에 생성한 노드 저장
        } else { // 만약에 저장한 적이 있으면
            node.setNext(head); // 생성한 노드의 다음 노드에 head를 저장
            head = node; // head에 생성한 노드를 저장
        }
        this.cnt++;
    }
    // 숫자를 하나 전달받아서 마지막에 추가하는 기능
    public void insertLast(Integer data) {
        Node node = new Node(data); // 노드를 생성해서 전달받은 숫자를 저장
        if(this.head == null){ // 만약에 저장한 적이 없으면
            head = node; // tail에 생성한 노드 저장
            tail = node; // head에 생성한 노드 저장
        } else { // 만약에 저장한 적이 있으면
            tail.setNext(node); // tail의 다음 노드에 현재 생성한 노드를 저장
            tail = node; // tail에 현재 생성한 노드 저장
        }
        this.cnt++;
    }
    // 숫자 하나와 순서번호 하나를 전달받아서 순서번호에 추가하는 기능
    public void insert(Integer data, Integer index){
        Node node = new Node(data);
        if(index == 0){ // 만약에 순서번호가 0이면
            this.insertFirst(data); // 숫자를 하나 전달받아 맨 처음에 추가하는 기능을 실행
            return; // 종료
        } else if (index.equals(cnt)){ // 만약에 순서번호가 현재 저장한 데이터의 수와 같으면
            this.insertLast(data); // 숫자를 하나 전달받아서 마지막에 추가하는 기능 실행하고
            return; // 종료
        } else if (index > cnt){ // 만약에 저장된 데이터 수보다 크면 순서번호에 저장하려고하면
            System.out.println("저장 못함"); // 저장 못함이라고 출력
        } else {
            Node current_node = this.head; // 노드를 생성해서 head를 저장
            int i = 0;
            while(i <= cnt) // 리스트의 끝까지 반복
                if(i == index -1){ // 입력받은 인덱스 - 1 일때
                    Node bmp = current_node.getNext(); // 현재 노드의 다음을 bmp에 저장
                    current_node.setNext(node); // 현재 노드의 다음을 삽입 노드에 저장
                    node.setNext(bmp); // 삽입노드의 다음을 bmp로 연결
                    break;
                }else{ // 해당 인덱스가 아닐때
                    current_node = current_node.getNext(); // 노드의 다음으로 이동
                    i++;
                }
            }
            this.cnt++;
        }
    // 처음 삭제
    public void deleteFirst(){
        if(head == null){
            System.out.println("삭제할 거 없음");
        } else {
            head = head.getNext();
        }
    }
    // 마지막 삭제
    public void deleteLast() {
        if(head == null) {
            System.out.println("삭제할 거 없음");
        } else {
            Node currentNode = head;
            while (currentNode.getNext().getNext() != null) {
                currentNode = currentNode.getNext();
            }
            tail = currentNode;
            tail.setNext(null);
        }
    }
    // 인덱스 받아 중간에서 삭제
    public void delete(Integer index){
        if(index == 0){
            Node node = head.getNext();
            head = node;
        } else if (index > cnt){
            System.out.println("삭제 못함");
        } else {
            Node current_node = this.head;
            int i = 0;
            while(i <= cnt){
                if(i == index -1){
                    current_node.setNext(current_node.getNext().getNext());
                    break;
                }else{
                    current_node = current_node.getNext();
                    i++;
                }
            }
            this.cnt--;
        }
    }
    // 연결리스트에 저장된 모든 데이터를 출력하는 print라는 이름의 기능
    public void print(){
        Node node = this.head;
        while(node != null){
            System.out.print(node.getData()+"->");
            node = node.getNext();
        }
    }
}
