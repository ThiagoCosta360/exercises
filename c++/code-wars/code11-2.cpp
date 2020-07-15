#include <iostream>
#include <vector>
#include <string>
#include <math.h>
using namespace std;

string who_is_next(const vector<string> &names, long long r)
{
    int max = 0;
    int count = 0;

    // if (r <= 5)
    //     return names[r - 1];

    while (max + 5 * pow(2, count) < r)
    {
        max += 5 * pow(2, count);
        count++;
    }
    r -= max + 1;

    int fileira = r % (int)pow(2, count);
    int coluna = (r / pow(2, count));

    cout << count << " " << max << " " << fileira << " " << coluna << " " << (r - fileira - (count * coluna)) << endl;

    return names[coluna];
    // return names[r - fileira - (count * coluna)];
}

int main(int argc, const char **argv)
{
    vector<string> names = {"Sheldon", "Leonard", "Penny", "Rajesh", "Howard"};

    cout << who_is_next(names, atoi(argv[1])) << endl;
    // for (int i = 0; i < 36; i++)
    // {
    //     cout << who_is_next(names, i) << endl;
    // }

    return 0;
}