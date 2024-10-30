package Search;
import java.util.List;
import java.util.Stack;

public class DFS {
    // 깊이 우선 탐색
    Stack<Integer> stack;
    boolean[] visited;

    public DFS(List<List<Integer>> lists) {
        this.stack = new Stack<>();
        this.visited = new boolean[lists.size()];
    }

    // 그래프와 시작 노드를 전달받아서 반환하는 건 없는 search 기능
    public void search2(List<List<Integer>> lists, Integer start) {
        stack.push(start); // 스택에 시작 노드를 push
        while(!stack.isEmpty()) { // 만약에 스택이 비어있지 않으면 반복
            Integer node = stack.pop(); // 스택에서 노드를 pop
            if(!visited[node]) { // 만약에 꺼낸 노드를 방문한 적이 없으면
                System.out.println(node); // 꺼낸 노드를 출력하고
                visited[node] = true; // 꺼낸 노드를 방문 처리
                // n꺼낸 노드에서 갈 수 있는 노드들 중 방문한 적이 없는 노드를 스택에 push
                for (Integer neighbor : lists.get(node)) {
                    if(!visited[neighbor]) {  stack.push(neighbor); }
                }
            }
        }
    }

}
