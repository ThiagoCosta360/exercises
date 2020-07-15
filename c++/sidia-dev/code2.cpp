#include <iostream>
#include <string>
#include <vector>
using namespace std;

class finder
{
public:
    int passo = 0;
    int posicao = 0;
    int sentido = 0; //1 = direita -1 = esquerda
    int vetor[10000];
    int tamanhov = 0;

    void initVector(int N)
    {
        tamanhov = N;
        for (int i = 0; i < N; i++)
        {
            vetor[i] = i + 1;
        }
    }

    void remove()
    {
        for (int i = posicao; i < tamanhov; i++)
        {
            vetor[i] = vetor[i + 1];
        }
        tamanhov--;
    }

    int next()
    {

        for (int i = 0; i < passo; i += sentido)
        {
            if (posicao >= tamanhov)
            {
                posicao = 0;
            }
            if (posicao < 0)
            {
                posicao = tamanhov;
            }
            else
            {
                posicao++;
            }
            // cout << vec[i] << endl;
        }
        return vetor[posicao];
    }
};

int main()
{
    int N = 0;
    int k = 0;
    int m = 0;
    cin >> N >> k >> m;

    int sortk = 0;
    int sortm = 0;

    finder findk;
    findk.passo = k;
    findk.sentido = 1;

    finder findm;
    findm.passo = m;
    findm.sentido = -1;

    while (N != 0 && k != 0 && m != 0)
    {
        while (findk.tamanhov < 0 && findm.tamanhov < 0)
        {

            int vec[N];
            int tamv = N;

            findk.initVector(N);
            findm.initVector(N);

            sortk = findk.next();
            sortm = findm.next();

                    cout << sortk << " " << sortm << ", ";

            if (sortk == sortm)
            {
                cout << sortk << ", ";
            }
            else
            {
                if (k < m)
                {
                    cout << sortk << " " << sortm << ", ";
                }
                else
                {
                    cout << sortm << " " << sortk << ", ";
                }
            }
            findk.remove();
            findm.remove();
        }
        cin >> N >> k >> m;
        cout << endl;
    }
    return 0;
}