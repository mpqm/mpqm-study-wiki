import object_example.Americano;
import object_example.Cafe;
import object_example.Latte;

public class jv18_1_cafe {
    public static void main(String[] args) {
        Cafe cafe = new Cafe();
        Americano americano = new Americano();
        cafe.sellCoffee(americano);
        Latte latte = new Latte();
        cafe.sellCoffee(latte);
        System.out.println(cafe.sales);
    }
}