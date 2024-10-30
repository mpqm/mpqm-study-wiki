package object_example;

public class StaticTest {
    public Integer num01;
    public static Integer num02;
    public void method01() {
        System.out.println(num01);
        System.out.println(num02);
        System.out.println("그냥 메소드");
    }
    public static void method02() {
        // 객체를 생성하고 사용하는게 아니기에 객체 안에 있는 변수를 사용할 수 없음
        // System.out.println(num01);
        System.out.println(num02);
        System.out.println("static 메소드");
    }
}
