import object_example.AbstractChild1;
import object_example.AbstractChild2;

public class jv17_abstract {
    public static void main(String[] args) {
        // 추상 클래스: 추상 메소드를 포함하고 있는 클래스
        // 추상 메소드: 선언부만 있고 구현부는 없는 메소드
        AbstractChild1 acc1 = new AbstractChild1();
        acc1.method01();
        acc1.method02();
        AbstractChild2 acc2 = new AbstractChild2();
        acc2.method01();
        acc2.method02();
    }
}
