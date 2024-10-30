package object_example;

public class Cafe {
    public Integer sales;
    public Cafe() { this.sales = 0; }
    // 다형성
    public void sellCoffee(Coffee2 coffee2){ this.sales = this.sales + coffee2.getPrice(); }
}