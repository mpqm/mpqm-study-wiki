package object_example;

import java.util.ArrayList;
import java.util.List;

public class Human {
    String name;
    Integer age;
    public List<Snack> snackList;

    public Human(String name, int age) {
        this.name = name;
        this.age = age;
        this.snackList = new ArrayList<>();
    }
}