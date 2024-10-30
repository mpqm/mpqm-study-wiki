package CodingTest;

public class DeliveryTest {
    public static void main(String[] args) {
        int[][] graph = {{1,2,1},{2,3,3},{5,2,2},{1,4,2},{5,3,1},{5,4,2}};
        Delivery delivery = new Delivery();
        System.out.println(delivery.solution(5, graph, 3));
    }
}
