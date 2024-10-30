package object_example;

public class Student {
    public String name;
    public Integer age;
    public Computer computer;
    public Integer wis;
    public Integer sul;
    Integer codiing;
    Integer study() {
        codiing += 10;
        return codiing;
    }
    Integer drink() {
        codiing -= 10;
        return codiing;
    }
    public Integer study(Integer time) {
        wis = wis + 10 * time;
        return wis;
    }
    public Integer drink(String type, Integer count) {
        if(type.equals("소주")) {
            sul = sul - count * 4;
        }
        if(type.equals("맥주")) {
            sul = sul - count * 1;
        }
        return sul;
    }
}
