package Sort;

import java.util.Arrays;

public class QuickSort {
    Integer[] arr;

    public QuickSort(Integer[] arr) {
        this.arr = arr;
    }
    public void sort() {
        arr = quickSort(arr, 1, arr.length - 1);
        System.out.print("퀵 정렬 : ");
        for (int i = 0; i < arr.length; i++) { System.out.print(arr[i] + " ");}
        System.out.println();
    }

    private Integer[] quickSort(Integer[] arr, int left, int right) {
        int part = partition(arr, left, right);
        for (int i = 0; i < arr.length; i++) {System.out.print(arr[i] + " "); }
        if (Arrays.copyOfRange(arr, 0, part).length > 1) {
            Integer[] result = quickSort(Arrays.copyOfRange(arr, 0, part), left, part - 1);
            for (int i = 0; i < result.length; i++) { arr[i] = result[i]; }
        }
        if (Arrays.copyOfRange(arr, part + 1, arr.length).length > 1) {
            Integer[] result = quickSort(Arrays.copyOfRange(arr, part + 1, arr.length), 1, (right - part) - 1);
            for (int i = 0; i < result.length; i++) { arr[i + part + 1] = result[i]; }
        }
        return arr;
    }

    private int partition(Integer[] arr, int left, int right) {
        int pivot = arr[0];
        while (left <= right) {
            for (int i = 0; i < arr.length; i++) {
                if (left < arr.length && arr[left] < pivot) { left++; }
            }
            for (int i = 0; i < arr.length; i++) {
                if (right < arr.length && arr[right] > pivot) { right--; }
            }
            if (left <= right) {
                int tmp = arr[left];
                arr[left] = arr[right];
                arr[right] = tmp;
                left++;
                right--;
            }
        }
        int tmp = arr[0];
        arr[0] = arr[right];
        arr[right] = tmp;
        return right;
    }
}
