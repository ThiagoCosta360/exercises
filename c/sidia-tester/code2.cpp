///////////////////////////////////////

//        DES B - Revisão de Contrato        //

///////////////////////////////////////

#include <string>
#include <iostream>

using namespace std;

int main()
{
    // D - Digito com problema
    // N - Valor original do contrato
    char D;
    string N;
    int aux = 0;

    cin >> D >> N;
    while (D != '0')
    {

        for (char digit : N)
        {
            if (digit != D)
            {
                if (digit == '0' && aux == 0)
                {
                }
                else
                {
                    cout << digit;
                    aux = 1;
                }
            }
        }
        if (aux == 0)
        {
            cout << 0;
        }
        else
        {
            aux = 0;
        }
        cout << endl;
        cin >> D >> N;
    }

    return 0;
}