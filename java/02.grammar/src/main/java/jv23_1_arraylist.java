

import object_example.Human;
import object_example.Snack;

import java.util.ArrayList;
import java.util.List;

public class jv23_1_arraylist {
    public static void main(String[] args) {
        List<Human> humanList = new ArrayList<>();
        Snack s1 = new Snack("abcd", 100, "abcd");
        Snack s2 = new Snack("abc", 100, "abc");
        Snack s3 = new Snack("ab", 100, "ab");
        Snack s4 = new Snack("a", 100, "a");
        Human h1 = new Human("pjs", 26);
        h1.snackList.add(s1);
        h1.snackList.add(s2);
        h1.snackList.add(s3);
        Human h2 = new Human("pjs", 24);
        h1.snackList.add(s2);
        h1.snackList.add(s3);
        h1.snackList.add(s4);
        Human h3 = new Human("pjs", 22);
        h1.snackList.add(s1);
        h1.snackList.add(s2);
        h1.snackList.add(s4);
        humanList.add(h1);
        humanList.add(h2);
        humanList.add(h3);
        System.out.println(h1.snackList);
    }
}
