package object_example;

public class Factorial {
    public Integer factorial(Integer num) {
        Integer result;
        result = 0;
        if(num == 1) { result = 1; }
        else { result = num * this.factorial(num-1); }
        return result;
    }
}
