#include <iostream>

using namespace std;

int solution(int N)
{
    short int startGap = 0;
    int gap = 0;
    int maxGap = 0;

    for (; N > 0; N = N >> 1)
    {

        if (N & 1)
        {
            if (startGap)
            {
                maxGap = gap > maxGap ? gap : maxGap;
                gap = 0;
            }
            else
            {
                startGap = 1;
            }
        }
        else
        {
            if (startGap)
            {
                gap++;
            }
        }
    }
    return maxGap;
}

int main()
{
    solution(529);
    // cout << "mama";

    return 0;
}