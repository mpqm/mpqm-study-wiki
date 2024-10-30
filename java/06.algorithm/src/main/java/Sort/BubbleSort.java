package Sort;

public class BubbleSort {
    Integer[] arr;

    public BubbleSort(Integer[] arr) {
        this.arr = arr;
    }

    public void sort(){
        for(int i = 0; i < arr.length; i++){
            Integer bmp = 0;
            for(int j = 0 ; j < arr.length; j++){
                if (j+1 == arr.length) { break; }
                if(arr[j] > arr[j+1]){
                    bmp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] =bmp;
                }
                else {
                    continue;
                }
            }
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
