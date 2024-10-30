package Astar;

public class AstartTest {
    public static void main(String[] args) {
        int[][] map = {
                {0, 0, 0, 0, 0, 0, 0, 0,},
                {0, 0, 0, 0, 0, 0, 0, 0,},
                {0, 0, 0, 0, 3, 3, 3, 0,},
                {0, 0, 1, 0, 3, 2, 3, 0,},
                {0, 0, 0, 0, 3, 0, 3, 0,},
                {0, 0, 0, 0, 3, 0, 3, 0,},
                {0, 0, 0, 0, 0, 0, 0, 0,},
                {0, 0, 0, 0, 0, 0, 0, 0,},
        };

        Astar astar = new Astar(map);
        astar.search();
    }
}
