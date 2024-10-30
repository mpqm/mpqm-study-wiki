import object_example.OverChild;
import object_example.OverParent;

public class jv14_overmethod {
    public static void main(String[] args) {
        // 메소드 오버로딩: 하나의 클래스에서 메소드를 똑같은 이름으로 여러개 만드는 것
        OverParent op = new OverParent();
        System.out.println(op.sum(10, 20));
        op.sum(10, 20, 30);
        // 메소드 오버라이딩: 자식 클래스에서 부모 클래스의 메소드를 똑같은 이름으로 다시 만드는 것
        OverChild oc = new OverChild();
        System.out.println(oc.sum(10,20));
    }
}
