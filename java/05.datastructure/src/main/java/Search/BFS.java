package Search;

import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class BFS {
    Queue<Integer> queue;
    boolean[] visited;

    public BFS(List<List<Integer>> lists) {
        this.queue = new LinkedList<>();
        this.visited = new boolean[lists.size()];
    }

    // 그래프와 시작 노드를 전달받아서 반환하는 건 없는 search 기능
    public void search(List<List<Integer>> lists, Integer start) {
        queue.add(start); // 큐에 시작 노드를 push
        visited[start] = true; // 시작 노드를 방문 처리
        while(!queue.isEmpty()) { // 만약에 큐가 비어있지 않으면 반복
            Integer node = queue.poll(); // 큐에서 노드를 가져옴
            System.out.println(node);
            // 가져온 노드에서 갈 수 있는 노드들을 하나씩 반복
            List<Integer> neighbors = lists.get(node);
            for(Integer neighbor : neighbors) {
                if(!visited[neighbor]) { // 갈 수 있는 노드가 방문한 적이 없으면
                    // 큐에 추가하고 방문처리
                    queue.add(neighbor);
                    visited[neighbor] = true;
                }
            }
        }
    }
}

