package CodingTest;

public class TargetNumberTest {
    public static void main(String[] args) {
        TargetNumber targetNumber = new TargetNumber();
        int[] input = {1,1,1,1,1};
        int target = 3;
        System.out.println(targetNumber.solution(input, target));
        int[] input2 = {4,1,2,1};
        int target2 = 2;
        System.out.println(targetNumber.solution(input2, target2));
    }
}
