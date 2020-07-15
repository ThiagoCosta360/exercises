// TODO: still wrong
#include <iostream>
#include <string>
#include <vector>
using namespace std;

int main()
{
    int m = 0;
    cin >> m;

    long long int i = 0;
    long long int j = 0;
    int flag;

    while (m > 0)
    {

        cin >> i >> j;

        while (j > 0)
        {
            // cout << i << " " << j << endl;

            // cout << i % 10 << " " << j % 10 << endl;
            if (i % 10 != j % 10)
            {
                flag = -1;
            }
            i /= 10;
            j /= 10;
        }

        if (flag == -1)
        {
            cout << "nao encaixa" << endl;
        }
        else
        {
            cout << "encaixa" << endl;
        }
        flag = 0;
        m--;
    }

    return 0;
}