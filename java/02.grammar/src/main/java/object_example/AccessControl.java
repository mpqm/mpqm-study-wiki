package object_example;

public class AccessControl {
    public Integer num01;
    Integer num03;
    protected Integer num02;
    private Integer num04;
    public void setNum04(Integer num) {
        if(num > 150) {
            System.out.println("나이는 최대 150살지만 설정할 수 있습니다.");
            this.num04 = 150;
        }
        else { this.num04 = num; }
    }
    public void print() { System.out.println(this.num04); }
}
