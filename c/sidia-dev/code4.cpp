#include <iostream>
#include <string>
#include <vector>
using namespace std;

class original
{
public:
    int erros;
    string nome;
    string assinatura;
};

int main()
{
    int n = 1; //total de alunos
        cin >> n;
    while (n != 0)
    {

        original originais[50];

        string aux1;
        string aux2;

        //originais
        for (int i = 0; i < n; i++)
        {
            cin >> aux1 >> aux2;
            originais[i].nome = aux1;
            originais[i].assinatura = aux2;
            originais[i].erros = 0;
        }

        int m;
        cin >> m;
        //chamadas
        for (int k = 0; k < m; k++)
        {
            cin >> aux1 >> aux2; //ta cert0

            for (int i = 0; i < n; i++)
            {

                    // cout << aux1 << " " << originais[i].nome<< endl;
                    // cout << aux2 << " " << originais[i].assinatura<< endl;
                if (aux1 == originais[i].nome)
                {
                    // cout << "socorro" << endl;
                    int erros = 0;
                    //verifica se é falsa
                    for (int j =0; j < aux1.length(); j++)
                    {   
                        // cout << aux2[j] << " " << originais[i].assinatura[j] << endl;
                        if (aux2[j] != originais[i].assinatura[j])
                            erros++;
                    }
                    if (erros > 1)
                    {
                        originais[i].erros++;
                    }
                    break;
                }
            }
        }
        int totalerros = 0;
        for (int l = 0; l < n; l++)
        {
            if (originais[l].erros > 0)
            {
                totalerros++;
            }
            originais[l].erros = 0;
        }
        cout << totalerros << endl;
        cin >> n;
    }

    return 0;
}