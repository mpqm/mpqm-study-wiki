package object_example;

public class Singleton {
    private static Singleton object;
    private Singleton() { }
    public static Singleton getObject() {
        if(object == null) { object = new Singleton(); }
        return object;
    }
}
