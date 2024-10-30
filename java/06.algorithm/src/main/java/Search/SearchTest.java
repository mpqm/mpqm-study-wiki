package Search;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class SearchTest {
    public static void main(String[] args) {
        List<Integer> node0 = Arrays.asList(1, 3, 4);
        List<Integer> node1 = Arrays.asList(0, 2);
        List<Integer> node2 = Arrays.asList(1, 3);
        List<Integer> node3 = Arrays.asList(0, 2, 4);
        List<Integer> node4 = Arrays.asList(0, 3);
        List<List<Integer>> graph = new ArrayList<List<Integer>>();
        graph.add(node0);
        graph.add(node1);
        graph.add(node2);
        graph.add(node3);
        graph.add(node4);
        DFS dfs = new DFS(graph);
        dfs.search2(graph, 0);
    }
}
