import object_example.Thread1;
import object_example.Thread2;

public class jv21_thread{
    public static void main(String[] args) {
        Thread1 t01 = new Thread1();
        Runnable r02 = new Thread2();
        Thread t02 = new Thread(r02);
        t01.start();
        t02.start();
        while(true) { System.out.println("메인"); }
    }
}
