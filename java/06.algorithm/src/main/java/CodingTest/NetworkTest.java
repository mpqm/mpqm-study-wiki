package CodingTest;

public class NetworkTest {
    public static void main(String[] args) {
        Network network = new Network();
        int[][] computers = {{1, 1, 0}, {1, 1, 0}, {0, 0, 1}};
        int[][] computers1 ={{1, 1, 0}, {1, 1, 1},{0, 1, 1}};
        int n = 3;
        System.out.println(network.solution(n, computers));
        System.out.println(network.solution(n, computers1));
    }
}
