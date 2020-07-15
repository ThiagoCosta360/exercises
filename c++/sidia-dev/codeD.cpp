#include <iostream>
#include <string>
#include <vector>
using namespace std;

class arvore
{

public:
    int tam = 0;
    string nome = "";
};

main()
{
    arvore arvores[10000];
    int total = 0;
    int m = 0;

    string aux;

    cin >> m;

    getline(cin, aux);
    aux = "";
    while (m > 0)
    {

        if (aux == "\n")
        {
            while (1)
            {
            }
            cout << total;
            continue;
        }
        else if (aux[0] == EOF)
        {

            break;
        }

        for (int i = 0; i; i++)
        {
            if (arvores[i].nome == "")
            {
                arvores[i].nome == aux;
                arvores[i].tam++;
                total++;
                break;
            }
            else if (aux == arvores[i].nome)
            {
                arvores[i].tam++;
                total++;
                break;
            }
        }
        m--;
    }

    return 0;
}
