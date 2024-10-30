package ShortestPath;
import java.util.*;

public class BellmanFord {
    final int INF = Integer.MAX_VALUE;
    int[] costs;
    int[] path;

    public void findPath(int nodeNum, int[][] graph) {
        costs = new int[nodeNum];
        path = new int[nodeNum];

        Arrays.fill(costs, INF);
        Arrays.fill(path, -1);

        costs[0] = 0; // 시작 노드는 0번 노드로 가정

        boolean noNegativeCycle = true;
        for (int i = 0; i < nodeNum - 1; i++) {
            for (int[] edge : graph) {
                int src = edge[0];
                int dst = edge[1];
                int weight = edge[2];
                if (costs[src] != INF && costs[dst] > costs[src] + weight) {
                    costs[dst] = costs[src] + weight;
                    path[dst] = src; // 경로 역추적을 위한 이전 노드 기록
                }
            }
        }

        // 음수 사이클 검사
        for (int[] edge : graph) {
            int src = edge[0];
            int dst = edge[1];
            int weight = edge[2];
            if (costs[src] != INF && costs[dst] > costs[src] + weight) {
                noNegativeCycle = false;
                break;
            }
        }

        if (noNegativeCycle) {
            for (int node = 1; node < nodeNum; node++) {
                System.out.print("To Node " + node + ": ");
                printPath(path, node);
                System.out.println(" (Cost: " + costs[node] + ")");
            }
        } else {
            System.out.println("음수 사이클 존재");
        }
    }

    private void printPath(int[] predecessors, int node) {
        if (node == -1) {
            return;
        }
        printPath(predecessors, predecessors[node]);
        System.out.print(node + " ");
    }
}
