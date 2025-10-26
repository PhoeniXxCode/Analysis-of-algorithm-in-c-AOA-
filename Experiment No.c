#include <stdio.h>

void merge(int a[], int lb, int mid, int ub)
{
    int i = lb;
    int j = mid + 1;
    int b[100];
    int k = lb;

    while (i <= mid && j <= ub)
    {
        if (a[i] <= a[j])
        {
            b[k] = a[i];
            i++;
        }
        else
        {
            b[k] = a[j];
            j++;
        }
        k++;
    }

    while (i <= mid)
    {
        b[k] = a[i];
        i++;
        k++;
    }

    while (j <= ub)
    {
        b[k] = a[j];
        j++;
        k++;
    }

    for (int t = lb; t <= ub; t++)
    {
        a[t] = b[t];
    }
}

void merge_sort(int a[], int lb, int ub)
{
    if (lb < ub)
    {
        int mid = (lb + ub) / 2;
        merge_sort(a, lb, mid);
        merge_sort(a, mid + 1, ub);
        merge(a, lb, mid, ub);
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

    merge_sort(a, 0, n - 1);

    printf("\nSorted elements: ");
    for (int i = 0; i < n; i++)
    {
        printf("%d ", a[i]);
    }

    printf("\n");
    return 0;
}
