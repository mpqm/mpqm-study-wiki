package object_example;

public class Pokemon {
    public String name;
    public Integer level;
    public Integer health;
    public void attack() {
        System.out.println(name + "가 공격");
    }
    public void eat() {
        health += 10;
        System.out.println(health);
    }
}
