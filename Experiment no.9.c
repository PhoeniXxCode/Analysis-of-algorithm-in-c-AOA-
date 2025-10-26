#include <stdio.h>

#define BOARD_SIZE 5

// Function to print the chessboard
void displayChess(int chBoard[BOARD_SIZE][BOARD_SIZE]) {
    for (int row = 0; row < BOARD_SIZE; row++) {
        for (int col = 0; col < BOARD_SIZE; col++)
            printf("%d ", chBoard[row][col]);
        printf("\n");
    }
}

// Function to check if placing a queen at (crntRow, crntCol) is safe
int isQueenPlaceValid(int chBoard[BOARD_SIZE][BOARD_SIZE], int crntRow, int crntCol) {
    // Check left side of current row
    for (int i = 0; i < crntCol; i++)
        if (chBoard[crntRow][i])
            return 0;

    // Check upper diagonal on left side
    for (int i = crntRow, j = crntCol; i >= 0 && j >= 0; i--, j--)
        if (chBoard[i][j])
            return 0;

    // Check lower diagonal on left side
    for (int i = crntRow, j = crntCol; i < BOARD_SIZE && j >= 0; i++, j--)
        if (chBoard[i][j])
            return 0;

    return 1; // safe to place queen
}

// Recursive function to solve N-Queens problem
int solveProblem(int chBoard[BOARD_SIZE][BOARD_SIZE], int crntCol) {
    // If all queens are placed
    if (crntCol >= BOARD_SIZE)
        return 1;

    // Try placing queen in all rows in current column
    for (int i = 0; i < BOARD_SIZE; i++) {
        if (isQueenPlaceValid(chBoard, i, crntCol)) {
            chBoard[i][crntCol] = 1; // place queen

            if (solveProblem(chBoard, crntCol + 1)) // recur for next column
                return 1;

            chBoard[i][crntCol] = 0; // backtrack
        }
    }
    return 0; // no place found in this column
}

// Function to initialize board and start solving
int displaySolution() {
    int chBoard[BOARD_SIZE][BOARD_SIZE] = {0}; // initialize board to 0

    if (solveProblem(chBoard, 0) == 0) {
        printf("Solution does not exist\n");
        return 0;
    }

    displayChess(chBoard);
    return 1;
}

int main() {
    displaySolution();
    return 0;
}
