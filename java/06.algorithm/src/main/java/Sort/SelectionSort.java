package Sort;

public class SelectionSort {
    Integer[] arr;

    public SelectionSort(Integer[] arr) {
        this.arr = arr;
    }

    public void sort(){
        for(int i = 0; i < arr.length; i++){
            int compare = arr[i];
            int switchIdx = i;
            for(int j = i ; j < arr.length; j++){
                if (compare > arr[j]){
                    compare = arr[j];
                    switchIdx = j;
                } else {
                    continue;
                }
            }
            arr[switchIdx] = arr[i];
            arr[i] = compare;
            this.print(arr);
        }
    }

    public void print(Integer[] arr){
        for(int i = 0; i < arr.length; i++){
            System.out.print(arr[i]);
            System.out.print(' ');
        }
        System.out.print('\n');
    }
}
