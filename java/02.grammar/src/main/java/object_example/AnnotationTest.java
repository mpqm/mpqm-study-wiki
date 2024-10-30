package object_example;

public class AnnotationTest {
    @CustomAnnotation(enabled = true)
    public void method1() { System.out.println("method1 is executed."); }
    @CustomAnnotation(enabled = false)
    public void method2() { System.out.println("method2 is executed."); }
    public void method3() { System.out.println("method3 is executed."); }
}
