package Dijkstra;

class DijkstraPriorityQueueNode implements Comparable<DijkstraPriorityQueueNode>{
    private int weight;
    private int index;

    public DijkstraPriorityQueueNode(int weight, int index) {
        this.weight = weight;
        this.index = index;
    }

    @Override
    public int compareTo(DijkstraPriorityQueueNode dijkstraNode) {
        return Integer.compare(this.weight, dijkstraNode.weight);
    }
}
