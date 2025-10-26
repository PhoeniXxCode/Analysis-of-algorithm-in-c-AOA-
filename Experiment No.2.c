#include <stdio.h>

int main()
{
    int n, i;
    printf("Enter the size of array: ");
    scanf("%d", &n);

    int array[n];
    printf("Enter %d integers:\n", n);

    for (i = 0; i < n; i++)
    {
        printf("Element %d: ", i + 1);
        scanf("%d", &array[i]);
    }

    printf("\nYou entered:\n| ");
    for (i = 0; i < n; i++)
    {
        printf("%d ", array[i]);
    }
    printf("|\n");

    // Selection Sort
    for (int i = 0; i < n - 1; i++)
    {
        int j = i;
        for (int k = i + 1; k < n; k++)
        {
            if (array[k] < array[j])
                j = k;
        }

        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    printf("\nThe sorted array (Selection Sort) is:\n| ");
    for (int j = 0; j < n; j++)
    {
        printf("%d ", array[j]);
    }
    printf("|\n");

    return 0;
}
