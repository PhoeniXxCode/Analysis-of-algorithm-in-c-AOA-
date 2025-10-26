#include <stdio.h>

#define nV 4      // Number of vertices
#define INF 999   // Representation of infinity

void printMatrix(int matrix[][nV]);

// Function to implement Floyd-Warshall Algorithm
void floydWarshall(int graph[][nV]) {
    int matrix[nV][nV];

    // Initialize distance matrix same as input graph
    for (int i = 0; i < nV; i++)
        for (int j = 0; j < nV; j++)
            matrix[i][j] = graph[i][j];

    // Add all vertices one by one as intermediate vertices
    for (int k = 0; k < nV; k++) {
        for (int i = 0; i < nV; i++) {
            for (int j = 0; j < nV; j++) {
                if (matrix[i][k] + matrix[k][j] < matrix[i][j])
                    matrix[i][j] = matrix[i][k] + matrix[k][j];
            }
        }
    }

    // Print the shortest distance matrix
    printMatrix(matrix);
}

// Function to print a matrix
void printMatrix(int matrix[][nV]) {
    printf("Shortest distance matrix:\n");
    for (int i = 0; i < nV; i++) {
        for (int j = 0; j < nV; j++) {
            if (matrix[i][j] == INF)
                printf("%4s", "INF");
            else
                printf("%4d", matrix[i][j]);
        }
        printf("\n");
    }
}

int main() {
    int graph[nV][nV] = {
        {0,   3, INF,  5},
        {2,   0, INF,  4},
        {INF, 1,  0,  INF},
        {INF, INF, 2,  0}
    };

    floydWarshall(graph);
    return 0;
}
