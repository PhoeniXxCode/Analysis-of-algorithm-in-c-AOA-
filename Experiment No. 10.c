#include <stdio.h>
#include <string.h>

// Function to search for pattern in text
void search(char* pat, char* txt) {
    int M = strlen(pat);
    int N = strlen(txt);

    // Slide pattern one by one
    for (int i = 0; i <= N - M; i++) {
        int j;

        // Check for pattern match at current index
        for (j = 0; j < M; j++) {
            if (txt[i + j] != pat[j]) {
                break;
            }
        }

        // If pattern matches completely
        if (j == M) {
            printf("Pattern found at index %d\n", i);
        }
    }
}

int main() {
    // Example 1
    char txt1[] = "AABAACAADAABAABA";
    char pat1[] = "AABA";
    printf("Example 1:\n");
    search(pat1, txt1);

    // Example 2
    char txt2[] = "agd";
    char pat2[] = "g";
    printf("\nExample 2:\n");
    search(pat2, txt2);

    return 0;
}
