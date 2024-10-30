package Dijkstra;

public class DijkstraTest {
    public static void main(String[] args) {
        int[][] graph = {{0, 1, 8}, {0, 3, 7}, {0, 4, 2},
                         {1, 5, 1}, {3, 5, 8}, {3, 7, 9},
                         {5, 7, 4}, {6, 7, 5}, {2, 6, 7}, {4, 6, 2}};
        DijkstraAdjacencyMatrix dijsksta = new DijkstraAdjacencyMatrix(graph, 8); // 노드 수 만큼 그래프 생성
        dijsksta.findPath(0);
        dijsksta.pathPrint(2);
    }
}
