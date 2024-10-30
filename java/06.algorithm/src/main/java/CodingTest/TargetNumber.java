package CodingTest;

import java.util.LinkedList;
import java.util.Queue;

// BFS
public class TargetNumber {
    Queue<Integer> queue = new LinkedList<>();

    public Integer solution(int[] numbers, int target) {
            Integer cnt = 0;
            this.queue.add(0); // 큐에 시작 노드를 push
            for (Integer i = 0; i < numbers.length; i++) {
                Integer queueSize = this.queue.size();
                while(queue.size() < queueSize*2){
                    Integer node = this.queue.poll();
                    this.queue.add(node +numbers[i]);
                    this.queue.add(node -numbers[i]);
                }
            }
            while(!queue.isEmpty()){
                Integer sum = this.queue.poll();
                if (sum == target) { cnt += 1; }
            }
            return cnt;
        }

    }

