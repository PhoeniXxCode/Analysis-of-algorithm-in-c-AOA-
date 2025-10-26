#include <stdio.h>

int main()
{
    float weight[50], profit[50], ratio[50];
    float Totalvalue = 0.0, temp, capacity;
    int n, i, j;

    printf("Enter the number of items: ");
    scanf("%d", &n);

    for (i = 0; i < n; i++)
    {
        printf("Enter Weight and Profit for item[%d]: ", i);
        scanf("%f %f", &weight[i], &profit[i]);
    }

    printf("Enter the capacity of knapsack: ");
    scanf("%f", &capacity);

    // Calculate profit/weight ratio
    for (i = 0; i < n; i++)
        ratio[i] = profit[i] / weight[i];

    // Sort items by ratio in descending order
    for (i = 0; i < n; i++)
    {
        for (j = i + 1; j < n; j++)
        {
            if (ratio[i] < ratio[j])
            {
                // Swap ratio
                temp = ratio[j];
                ratio[j] = ratio[i];
                ratio[i] = temp;

                // Swap weight
                temp = weight[j];
                weight[j] = weight[i];
                weight[i] = temp;

                // Swap profit
                temp = profit[j];
                profit[j] = profit[i];
                profit[i] = temp;
            }
        }
    }

    // Take items in order of ratio
    for (i = 0; i < n; i++)
    {
        if (weight[i] > capacity)
            break;
        else
        {
            Totalvalue += profit[i];
            capacity -= weight[i];
        }
    }

    // Take fraction of the next item if possible
    if (i < n)
        Totalvalue += ratio[i] * capacity;

    printf("\nThe maximum value is: %f\n", Totalvalue);

    return 0;
}
