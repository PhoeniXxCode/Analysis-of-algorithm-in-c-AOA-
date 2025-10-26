#include <stdio.h>
#include <limits.h>

#define MAX 9999
#define n 4

int distan[20][20] = {
    {0, 22, 26, 30},
    {30, 0, 45, 35},
    {25, 45, 0, 60},
    {30, 35, 40, 0}
};

int DP[32][n];  // DP[visited_mask][current_city]

// TSP function
int TSP(int mark, int position) {
    int completed_visit = (1 << n) - 1;

    if (mark == completed_visit) {
        return distan[position][0]; // return to start
    }

    if (DP[mark][position] != -1) {
        return DP[mark][position];
    }

    int answer = MAX;

    for (int city = 0; city < n; city++) {
        if ((mark & (1 << city)) == 0) { // city not visited
            int newAnswer = distan[position][city] + TSP(mark | (1 << city), city);
            if (newAnswer < answer)
                answer = newAnswer;
        }
    }

    return DP[mark][position] = answer;
}

int main() {
    // Initialize DP table
    for (int i = 0; i < (1 << n); i++) {
        for (int j = 0; j < n; j++) {
            DP[i][j] = -1;
        }
    }

    printf("Minimum Distance Travelled -> %d\n", TSP(1, 0));

    return 0;
}
