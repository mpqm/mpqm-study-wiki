package Stack;

public class Stack2 {
    public Character[] arr;
    Integer top;

    public Stack2() {
        this.arr = new Character[100];
        this.top = -1;
    }

    public boolean isEmpty () {
        if(top != -1){
            return true;
        }else{
            return false;
        }
    }

    public boolean isFull(){
        if(top < this.arr.length-1){
            return true;
        }else{
            System.out.println("스택이 가득참");
            return false;
        }
    }

    public Character peek(){
        if(isEmpty()){
            return this.arr[this.top];
        }
        return null;
    }

    public void push(Character data) {
        if(isFull()){
            this.top++;
            this.arr[this.top] = data;
        }
    }

    public Character pop() {
        if(isEmpty()){
            Character temp = this.arr[this.top];
            this.arr[this.top] = null;
            this.top--;
            return temp;
        }else {
            return null;
        }
    }

    public void display(){
        for (Character data : this.arr) {
            System.out.printf("[%d]", data);
        }
    }

}
