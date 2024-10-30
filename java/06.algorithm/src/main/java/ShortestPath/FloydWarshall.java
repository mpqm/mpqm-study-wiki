package ShortestPath;

import java.util.*;

class FloydWarshall {
    final int INF = Integer.MAX_VALUE;
    int[][] costs;
    int[][] path;


    public void findPath(int nodeNum, int[][] graph) {
        costs = new int[nodeNum][nodeNum];
        path = new int[nodeNum][nodeNum];

        for (int i = 0; i < nodeNum; i++) {
            Arrays.fill(costs[i], INF);
        }
        for (int i = 0; i < nodeNum; i++) {
            Arrays.fill(path[i], -1);
        }

        for (int i = 0; i < graph.length; i++) {
            costs[graph[i][0]][graph[i][1]] = graph[i][2];
            path[graph[i][0]][graph[i][1]] = graph[i][0];
        }

        for (int k = 0; k < nodeNum; k++) {
            for (int i = 0; i < nodeNum; i++) {
                for (int j = 0; j < nodeNum; j++) {
                    if (i!=j && costs[i][k] != INF && costs[k][j] != INF && costs[i][j] > costs[i][k] + costs[k][j]) {
                        costs[i][j] = costs[i][k] + costs[k][j];
                        path[i][j] = path[k][j];
                    }
                }
            }
        }

    }


    public void printPath() {
        System.out.println("Costs Table:");
        for (int i = 0; i < costs.length; i++) {
            for (int j = 0; j < costs[i].length; j++) {
                if (costs[i][j] == INF) {
                    System.out.print("INF\t");
                } else {
                    System.out.print(costs[i][j] + "\t");
                }
            }
            System.out.println();
        }
        System.out.println();

        System.out.println("Path Table:");
        for (int i = 0; i < path.length; i++) {
            for (int j = 0; j < path[i].length; j++) {
                if (path[i][j] == -1) {
                    System.out.print("-1\t");
                } else {
                    System.out.print(" " + path[i][j] + "\t");
                }
            }
            System.out.println();
        }
        System.out.println();
    }
}