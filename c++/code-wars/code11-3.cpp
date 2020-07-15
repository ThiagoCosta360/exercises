#include <iostream>
#include <vector>
#include <string>
#include <math.h>
using namespace std;

string who_is_next(const vector<string> &names, long long r)
{
    int max = 0;
    int count = 0;
    int size = names.size();

    while (max + size * pow(2, count) < r)
    {
        max += size * pow(2, count);
        count++;
    }

    return names[((r - (max + 1)) / pow(2, count))];
}

int main(int argc, const char **argv)
{
    vector<string> names = {"Sheldon", "Leonard", "Penny", "Rajesh", "Howard"};
    cout << who_is_next(names, atoi(argv[1])) << endl;
    return 0;
}