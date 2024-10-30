//package DijsktraQueue;
//
//import java.util.PriorityQueue;
//
//public class DijkstraQueue {
//
//}
//
//
//class Graph{
//    private int n;           // 노드들의 수
//    private int maps[][];    // 노드들간의 가중치 저장할 변수
//
//    public Graph(int n){
//        this.n = n;
//        maps = new int[n][n];
//
//        // 인접행렬 모든 값 무한대로 초기화
//        for(int i=0; i<n; ++i){
//            for(int j=0; j<n; ++j){
//                maps[i][j] = Integer.MAX_VALUE;
//            }
//        }
//    }
//
//
//
//    public void input(int i, int j, int w){
//        maps[i][j] = w;
//        maps[j][i] = w;
//    }
//
//    public void dijkstra(int v){
//        PriorityQueue<Node> que = new PriorityQueue<>();     // 노드까지의 거리를 저장할 우선순위 큐
//        int distance[] = new int[n];          // 최단 거리를 저장할 변수
//        boolean[] check = new boolean[n];     // 해당 노드를 방문했는지 체크할 변수
//
//        // distance값 초기화. 무한대를 int 자료형의 최대값으로 표현했다.
//        for(int i=0; i<n; ++i){
//            distance[i] = Integer.MAX_VALUE;
//        }
//
//        // 시작노드값 초기화.
//        que.add(new Node(v, 0));
//        distance[v] = 0;
//        check[v] = true;
//
//        // 결과값 출력
//        for(int i=0; i<n; ++i){
//            if(distance[i] == 2147483647) System.out.print("∞ ");
//            else System.out.print(distance[i]+" ");
//        }
//        System.out.println("");
//
//        // 연결노드 distance갱신
//        for(int i=0; i<n; ++i){
//            if(!check[i] && maps[v][i] != Integer.MAX_VALUE){
//                distance[i] = maps[v][i];
//                que.add(new Node(maps[v][i], i));
//            }
//        }
//
//        // 결과값 출력
//        for(int i=0; i<n; ++i){
//            if(distance[i] == 2147483647) System.out.print("∞ ");
//            else System.out.print(distance[i]+" ");
//        }
//        System.out.println("");
//
//        while(!que.isEmpty()){
//            // 원래는 모든 노드가 true될때까지 인데
//            // 노드가 n개 있을 때 다익스트라를 위해서 반복수는 n-1번이면 된다.
//            // 원하지 않으면 각각의 노드가 모두 true인지 확인하는 식으로 구현해도 된다.
//            int min = Integer.MAX_VALUE;
//            int min_index = -1;
//
//            // 노드 최소값 꺼내기
//            Node node = que.poll();
//            min = node.weight;
//            min_index = node.index;
//
//            // 다른 노드를 거쳐서 가는 것이 더 비용이 적은지 확인한다.
//            check[min_index] = true;
//            for(int i=0; i<n; ++i){
//                if(!check[i] && maps[min_index][i] != Integer.MAX_VALUE){
//                    if(distance[min_index] + maps[min_index][i] < distance[i]){
//                        distance[i] = distance[min_index] + maps[min_index][i];
//                        que.add(new Node(distance[i], i));
//                    }
//                }
//            }
//
//            // 결과값 출력
//            for(int i=0; i<n; ++i){
//                if(distance[i] == 2147483647) System.out.print("∞ ");
//                else System.out.print(distance[i]+" ");
//            }
//            System.out.println("");
//        }
//    }
//}
