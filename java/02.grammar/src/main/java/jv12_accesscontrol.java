import object_example.AccessControl;

public class jv12_accesscontrol {
    public static void main(String[] args) {
        // 접근 제어자(변수, 메소드, 클래스)
        //                같은 클래스      같은 패키지      자식클래스       전체
        // - public       O               O               O               O
        // - protected    O               O               O
        // - default      O               O
        // - private      O
        AccessControl ac = new AccessControl();
        // num01에는 public이 붙어있기 때문에 다른 클래스에서 접근할 수 없음
        ac.num01 = 10;
        // num04에는 private이 붙어있기 때문에 다른 클래스에서 접근할 수 없음
        // ac.num04 = 1000000;
        ac.setNum04(4000);
        ac.print();
    }
}
