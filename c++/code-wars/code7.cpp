#include <iostream>
#include <string>
#include <math.h>

using namespace std;

bool narcissistic(int value)
{
    int t=0;
    for (char c : to_string(value))
    {
        t += pow(c-'0',to_string(value).length());
    }
    return t == value;
}

int main()
{
    cout << narcissistic(153);
    return 0;
}