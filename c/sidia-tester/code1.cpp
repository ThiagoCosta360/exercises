//             DESAFIO A             //

//             Kaprekar              //

///////////////////////////////////////

#include <iostream>

using namespace std;

int digitos[10];

// Método que conta as ocorrencias de digitos de X

// Por exemplo, X = 1555; digitos[5] = 3; Significa que existem 3 ocorrencias em X do digito 5

void get_digitos(int X)
{
    int retorno = 0;
    int aux = X;

    int n;
    for (int i = 0; i < 4; i++)
    {
        n = aux % 10;
        aux = aux / 10;

        digitos[n]++;
    }
    return;
}

// Função que calcula o menor número formados pelos digitos de X

int menor_numero_com_digitos_de(int X)
{

    get_digitos(X);

    int aux = 1000;

    int retorno = 0;

    for (int i = 0; i<10;)
    {
    }
}
//  for (int i = 0; i < T>> X;

//   get_digitos(X);

//   int count = 0;

//      //Contagen de digitos diferentes

//   for (int j = 0; j < 10 xss=removed xss=removed>
// }

int main()
{
    get_digitos(1555);

    for (int i = 0; i < 10; i++)
    {
        cout << digitos[i];
    }

    return 0;
}