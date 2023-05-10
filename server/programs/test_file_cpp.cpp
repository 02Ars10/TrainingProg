#include <iostream>

using namespace std;

// Функция для обмена значениями
void swap(int* a, int* b)
{
    int t = *a;
    *a = *b;
    *b = t;
}

/* Эта функция принимает последний элемент в качестве pivot-элемента,
   помещает его на своё правильное место в отсортированном массиве
   и помещает все меньшие элементы (меньшие, чем pivot) перед ним,
   а большие элементы (большие, чем pivot) после него. */
int partition(int arr[], int low, int high)
{
    int pivot = arr[high];  // Пивот
    int i = (low - 1);  // Индекс меньшего элемента

    for (int j = low; j <= high - 1; j++)
    {
        // Если текущий элемент меньше или равен пивоту
        if (arr[j] <= pivot)
        {
            i++;    // Увеличиваем индекс меньшего элемента
            swap(&arr[i], &arr[j]);  // Меняем элементы местами
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return (i + 1);
}

/* Функция быстрой сортировки */
void quickSort(int arr[], int low, int high)
{
    if (low < high)
    {
        // pi - индекс разделителя, arr[p] теперь на своём месте
        int pi = partition(arr, low, high);

        // Рекурсивно сортируем элементы до разделителя и после разделителя
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

// Функция для вывода массива
void printArray(int arr[], int size)
{
    int i;
    for (i = 0; i < size; i++)
        cout << arr[i] << " ";
    cout << endl;
}

// Пример использования
int main()
{
    double sTime, eTime;
    int n=1000000;

    int* arr = new int[n];
    // Заполнение массива случайными числами
    for (int i = 0; i < n; i++) {
        arr[i] = rand() % 100;
    }
    
    quickSort(arr, 0, n - 1);

    cout << "Sort mass: \n";
    printArray(arr, n);
   
    return 0;
}