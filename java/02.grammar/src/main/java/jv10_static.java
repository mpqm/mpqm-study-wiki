import object_example.StaticTest;

public class jv10_static {
    public static void main(String[] args) {
        StaticTest se01 = new StaticTest();
        se01.num01 = 10;
        StaticTest se02 = new StaticTest();
        se02.num01 = 20;
        StaticTest.num02 = 30;
        se01.method01();
        se02.method01();
        StaticTest.method02();
    }
}