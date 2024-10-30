package Stack;

public class Stack {
    Integer[] arr;
    Integer top;
    // 생성자
    public Stack() {
        this.arr = new Integer[10]; // 크기를 전달받아서 해당 크기만큼 정수를 저장할 수 있는 배열 생성
        this.top = -1; // top에 -1 저장
    }
    // 스택에 값이 모두  비어있는지 확인
    public boolean isEmpty () {
        if(top != -1){ // top이 -1이면 true를 반환
            return true;
        }else{ // 그렇지 않으면 false를 반환
            System.out.println("스택이 비어있음");
            return false;
        }
    }
    // 스택에 값이 모두 저장되어 있는지 확인
    public boolean isFull(){
        if(top < this.arr.length-1){ // top이 배열의 크기보다 1작으면 true 반환
            return true;
        }else{ // 그렇지 않으면 false를 반환
            System.out.println("스택이 가득참");
            return false;
        }
    }
    // 제일 마지막에 저장된 값 확인
    public Integer peek(){
        if(isEmpty()){
            return this.arr[this.top]; // 스택이 비어있지 않으면제일 마지막에 저장된 값을 반환
        }
        return null;
    }
    // 데이터를 저장하는 연산
    public void push(Integer data) {
        if(isFull()){ // 저장할 데이터를 전달 받고, 스택이 가득차 있지 않으면
            this.top++; // top을 1증가하고 해당 인덱스 번호의 배열에 데이터 저장
            this.arr[this.top] = data;
        }
    }
    // 데이터를 삭제하는 연산
    public Integer pop() {
        if(isEmpty()){ // 스택이 비어있지 않으면
            Integer temp = this.arr[this.top]; // top 인덱스 번호의 배열에 값을 꺼내고
            this.arr[this.top] = null; // top 인덱스 번호의 배열에 값을 비워주고
            this.top--; // top을 1 감소
            return temp; //	꺼낸 값을 반환
        }else {
            return null;
        }
    }
    // 스택에 저장된 모든 데이터를 출력하는 기능
    public void display(){
        for (Integer data : this.arr) {
            System.out.printf("[%d]", data);
        }
    }

}
