#include <stdio.h>
#include <stdlib.h>

int * sort(int array[], int length, int count);

void showArray (int array[], int length){

    int i = 0;

    printf("[");
    for(i; i < length; i++)
        printf("%d, ", array[i]);
    printf("]");
}

int main () {

    int array[] = {20, 17, 5, 15, 9, 3, 4, 1, 50, 300, 250, 2, 10, 7, 6, 8};
    int length = sizeof(array) / sizeof(array[0]);

    int * arraysort = sort(array, length, 0);

    showArray(arraysort, length);

    return 0;
}

int * sort (int array[], int length, int count){

    int index = count;
    int min_number = array[index];
    int i;

    for(i = 1 + count; i < length; i++){

        if(min_number > array[i]){
            min_number = array[i];
            index = i;
        }
    }
    array[index] = array[count];
    array[count] = min_number;

    if(count < length){
        count++;
        sort(array, length, count);
    }
    return array;
}
