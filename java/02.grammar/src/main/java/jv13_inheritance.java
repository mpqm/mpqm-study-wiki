import object_example.InheChild;
import object_example.InheParent;

public class jv13_inheritance {
    public static void main(String[] args) {
        // 상속: 하나의 클래스에 만든 변수 메소드를 다른 클래스에 그대로 똑같이 만들어주는 것
        InheParent p01 = new InheParent();
        p01.밥먹는다();
        // p01.부동산;
        InheChild c01 = new InheChild();
        // 자식클래스에는 없는 메소드이지만 부모 클래스에 존재해서 사용 가능
        c01.밥먹는다();
        c01.부동산 = "강남 빌딩";
        c01.돈벌기();
        // 자식클래스에는 없는 속성이지만 부모 클래스에 존재해서 사용 가능
        System.out.println(c01.재산);
    }
}
