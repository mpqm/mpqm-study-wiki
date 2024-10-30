package object_example;

public class Student2 implements Comparable<Student> {
    Integer age;
    public String name;
    public Student2(Integer age, String name) {
        this.age = age;
        this.name = name;
    }
    @Override
    public int compareTo(Student o) {
        if(this.age < o.age){ return -1; }
        else if (this.age > o.age){ return 1; }
        else { return 0; }
    }
}
