package CodingTest;

import java.util.Stack;

// DFS
public class Network {

    public int solution(int n, int[][] computers) {
        Stack<Integer> stack = new Stack<>();
        boolean[] visited = new boolean[n];
        int cnt = 0;
        while(true){
            int loopStopFlag = 0;
            int startNode = 0;
            for(int i = 0; i < n; i++){
                if(visited[i] == false){
                    startNode = i;
                    break;
                }
                else if (i == n-1) { loopStopFlag = 1; }
            }
            if(loopStopFlag == 1){ break; }

            // 스택에 시작 노드를 push
            stack.push(startNode);
            while (!stack.isEmpty()) { // 만약에 스택이 비어있지 않으면 반복
                Integer node = stack.pop(); // 스택에서 노드를 pop
                if (!visited[node]) { // 만약에 꺼낸 노드를 방문한 적이 없으면
                    visited[node] = true; // 꺼낸 노드를 방문 처리
                    for (int i = 0; i < n; i++) {
                        if (!visited[i] && computers[node][i] != 0) {
                            // 값이 아니라 노드 번호를 저장해야됨
                            stack.push(i);
                        }
                    }
                }
            }
            cnt += 1;
        }
        return cnt;
    }
}

