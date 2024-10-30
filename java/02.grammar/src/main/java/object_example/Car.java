package object_example;

public class Car {
    public String color;
    Integer price;
    String type;
    public Integer speed;
    public String paint(String color){
        this.color = color;
        return color;
    }
    public Integer accel(Integer second, Integer str){
        speed = speed + second * str;
        return speed;
    }
    public Integer decel(Integer second, Integer str){
        speed = speed - second * str;
        return speed;
    }
}
