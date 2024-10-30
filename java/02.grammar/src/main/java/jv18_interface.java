import object_example.InterfaceImplements1;
import object_example.InterfaceImplements2;
import object_example.InterfaceTest;

public class jv18_interface {
    public static void main(String[] args) {
        // 인터페이스
        // 일반적인 메소드는 없고 추상 메소드로만 이루어짐
        // 인터페이스로 직접 객체를 생성할 수 없고 구현체를 만들어서 객체를 생성
        InterfaceImplements1 ii1 = new InterfaceImplements1();
        ii1.method01();
        ii1.method02();
        InterfaceImplements2 ii2 = new InterfaceImplements2();
        ii2.method01();
        ii2.method02();

        // 다형성
        // 부모 클래스 또는 인터페이스를 상속받거나 구현한 클래스가 있을 때
        // 해당 클래스의 객체를 저장할 변수를 부모 클래스 또는 인퍼테이스로 만들어 사용하는 것
        // 하나의 변수에 여러가지 클래스의 객체를 모두 저장 가능한 것
        InterfaceTest ii3;
        ii3 = new InterfaceImplements1();
        ii3.method01();
        ii3.method02();
        ii3 = new InterfaceImplements2();
        ii3.method01();
        ii3.method02();
    }
}
