#include <stdio.h>

void swap(int *p, int *q)
{
    int temp = *p;
    *p = *q;
    *q = temp;
}

int partition(int A[], int lb, int ub)
{
    int piv = A[lb];
    int i = lb + 1;

    for (int j = lb + 1; j <= ub; j++)
    {
        if (A[j] < piv)
        {
            swap(&A[i], &A[j]);
            i++;
        }
    }
    swap(&A[lb], &A[i - 1]);
    return i - 1;
}

void quick_sort(int A[], int lb, int ub)
{
    if (lb < ub)
    {
        int piv_pos = partition(A, lb, ub);
        quick_sort(A, lb, piv_pos - 1);
        quick_sort(A, piv_pos + 1, ub);
    }
}

int main()
{
    int a[100], n;

    printf("Enter size of array: ");
    scanf("%d", &n);

    for (int i = 0; i < n; i++)
    {
        printf("Enter element %d: ", i + 1);
        scanf("%d", &a[i]);
    }

    printf("\nElements before sorting: ");
    for (int i = 0; i < n; i++)
    {
        printf("%d ", a[i]);
    }

    quick_sort(a, 0, n - 1);

    printf("\nSorted elements: ");
    for (int i = 0; i < n; i++)
    {
        printf("%d ", a[i]);
    }

    printf("\n");
    return 0;
}
