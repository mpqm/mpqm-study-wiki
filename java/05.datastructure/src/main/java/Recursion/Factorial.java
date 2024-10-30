package Recursion;

public class Factorial {
    public Integer calc(Integer num) {
        if(num == 1){ return 1;}
        else { return num * calc(num -1); }
    }
}
