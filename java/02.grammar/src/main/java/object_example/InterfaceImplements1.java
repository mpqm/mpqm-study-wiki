package object_example;

public class InterfaceImplements1 implements InterfaceTest {
    @Override
    public void method01() {
        System.out.println("InterfaceImplegents1의 메소드01 호출함");
    }

    @Override
    public void method02() {
        System.out.println("InterfaceImplegents1의 메소드02 호출함");
    }
}
