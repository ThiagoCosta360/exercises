#include <string>

using namespace std;

int dontGiveMeFive(int start, int end)
{
    int count = 0;
    int sum = 1;
    for (int i = start; i <= end; i++)
    {
        for (char c : to_string(i))
        {
            if (c == '5')
            {
                sum = 0;
            }
        }
        count += sum;
        sum = i;
    }
    return count;
}