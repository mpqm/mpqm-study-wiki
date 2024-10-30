package Sort;

public class SortTest {
    public static void main(String[] args) {
        Integer[] arr = new Integer[]{59, 34, 80, 27, 61, 90, 55, 37, 25, 43};
        SelectionSort selectionSort = new SelectionSort(arr);
        selectionSort.sort();
        BubbleSort bubbleSort = new BubbleSort(arr);
        bubbleSort.sort();
        QuickSort quickSort = new QuickSort(arr);
        quickSort.sort();
    }
}
