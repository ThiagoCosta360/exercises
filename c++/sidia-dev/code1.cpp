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

    int count = 0;
    int flag = 0;

    string aux1;
    string aux2;

    while (m > 0)
    {

        cin >> i >> j;
        aux1 = to_string(i);
        aux2 = to_string(j);
        cout << endl << aux1 <<

        for (int i = aux1.length() - aux2.length(); i < aux1.length(); i++)
        {
            // cout << aux1[i] << " " << aux2[count]<< endl;
            // cout << i << " " << count<< endl;
            if (aux1[i] != aux2[count])
            {
                flag = -1;
            }
            count++;
        }

        if (flag == -1)
        {
            cout << "nao encaixa" << endl;
        }
        else
        {
            cout << "encaixa" << endl;
        }
        // cout << aux1 << " " << aux2 << endl;
        aux1 = "";
        aux2 = "";
        m--;
    }

    return 0;
}