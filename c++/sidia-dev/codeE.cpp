#include <iostream>
#include <string>
#include <vector>
using namespace std;

int main(int argc, const char **argv)
{
    int k = 0;

    cin >> k;
    char tabela[k][k];

    for (int i = 0; i < k; i++)
    {
        for (int j = 0; j < k; j++)
        {
            cin >> tabela[i][j];
        }
    }

    for (int i = 0; i < k; i++)
    {
        for (int j = 0; j < k; j++)
        {
            if (tabela[i][j] == '.')
            {
                /* code */
            }
            else if (tabela[i][j] == 'X')

            /* code */
        }
    }
}

// for (int i = 0; i < k; i++)
// {
//     for (int j = 0; j < k; j++)
//     {
//         cout << tabela[i][j] << " ";
//     }
// }

return 0;
}