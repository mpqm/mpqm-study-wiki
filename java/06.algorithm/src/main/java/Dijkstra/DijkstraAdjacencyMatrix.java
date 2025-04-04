package Dijkstra;

public class DijkstraAdjacencyMatrix {
    int n;           // 노드들의 수
    int[][] matrix;  // 인접행렬
    int[] distance;  // 최단 거리를 저장할 배열
    boolean[] check; // 해당 노드를 방문했는지 체크할 배열
    Integer[] path;      // 최단 경로를 저장할 배열

    // 다익스트라 알고리즘 생성자
    public DijkstraAdjacencyMatrix(int[][] graph, int n) {
        this.n = n;
        this.distance = new int[n];
        this.check = new boolean[n];
        this.path = new Integer[n];
        this.matrix = new int[n][n];

        // 인접행렬의 모든 값 무한대로 초기화
        for(int i = 0; i < n; ++i){
            for(int j = 0; j < n; ++j){
                matrix[i][j] = Integer.MAX_VALUE;
            }
        }
        // 인접행렬 값넣기
        // grpah[?][0] from노드 / graph[?][1] to노드 / graph[?][2] 거리
        for (int i = 0; i < graph.length; ++i) {
                matrix[graph[i][0]][graph[i][1]] = graph[i][2];
                matrix[graph[i][1]][graph[i][0]] = graph[i][2];
        }

        // distance값 무한대로 초기화
        for(int i=0; i < n; ++i){
            distance[i] = Integer.MAX_VALUE;
        }
    }

    // 출력
    public void print(){
        for(int i=0; i < n; ++i){
            if(distance[i] == 2147483647) System.out.print("∞ ");
            else System.out.print(distance[i]+" ");
        }
        System.out.println("");
    }

    // 인접행렬 출력
    public void matrixPrint(){
        for(int i = 0; i < n; ++i){
            for(int j = 0; j < n; ++j){
                if(matrix[i][j] == 2147483647) System.out.print("∞ ");
                else System.out.print(matrix[i][j]+" ");
            }
            System.out.println("");
        }
    }

    // 경로 출력
    public void pathPrint(Integer f){
        System.out.print(f + " ");
        while (f != path[f] ) {
            System.out.print(path[f] + " ");
            f = path[f];
        }
        System.out.println("");
    }

    // 다익스트라 알고리즘
    public void findPath(int v){
        // 초기 노드 설정
        distance[v] = 0; // distacne[v]는 자기 자신이므로 0으로 초기화
        check[v] = true; // 자기 자신 방문
        path[v] = v; // 첫째 경로는 자기 자신
        print(); // 초기 노드를 기준으로 출력
        // matrixPrint(); // 인접행렬 보기

        // 초기노드에 인접한 노드들의 distance갱신
        for(int i = 0; i < n; ++i){
            // 방문하지 않은 노드이고, 현재노드와 인접한 노드인 경우에
            if(!check[i] && matrix[v][i] != Integer.MAX_VALUE){
                distance[i] = matrix[v][i]; // 거리값 저장
                path[i] = v; // 경로 저장
            }
        }
        print(); // 초기 노드에서 다음인접노드를 기준으로 출력

        // 노드 최소값을 찾아 갱신해가며 전체 경로의 최단거리를 구함
        // 원래는 모든 노드가 true될때까지수행하는데 노드가 n개 있을 때
        // 다익스트라를 위해서 반복수는 n-1번이면 된다.
        for(int i = 0; i < n-1; ++i) {
            int min = Integer.MAX_VALUE;
            int minIdx = v;
            // 방문한 적이 없는 노드중에서 distance에 있는 값중 가장 비용이 적은 노드를 선택
            for (int j = 0; j < n; ++j) {
                if (!check[j] && distance[j] < min) {
                    min = distance[j];
                    minIdx = j;
                }
            }
            // 다른 노드를 거쳐서 가는 것이 더 비용이 적은지 확인
            check[minIdx] = true; // 선택된 노드를 방문 처리
            for(int k = 0; k < n; ++k){
                // 방문하지 않은 노드이고, 현재노드와 연결된 노드인 경우에
                if(!check[k] && matrix[minIdx][k] != Integer.MAX_VALUE){
                    // 새로운 경로가 더 짧은 경우에
                    if(distance[minIdx] + matrix[minIdx][k] < distance[k]){
                        // 값을 갱신
                        distance[k] = distance[minIdx] + matrix[minIdx][k];
                        path[k] = minIdx;
                    }
                }
            }
        print();
        }
   }

}

