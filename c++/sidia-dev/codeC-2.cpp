#include <iostream>
#include <string>
#include <vector>
#include <iomanip>
using namespace std;

void remove(vector<int> &vec, int indice)
{
    vec.erase(vec.begin() + indice);
}

void imprime(vector<int> &vec, int position)
{
    cout << setw(3) << vec[position];
}

int find_next(vector<int> &vec, int position, int sentido, int passo)
{
    // cout << "Vou te achar " << position << " " << sentido << " " << passo << endl;
    if (sentido == 1)
    {
        for (int i = 1; i < passo; i++)
        {
            position++;
            if ((position) >= vec.size())
            {
                position = 0;
            }
        }
    }

    if (sentido == -1)
    {
        for (int i = 1; i < passo; i++)
        {
            position--;
            if ((position) < 0)
            {
                position = vec.size() - 1;
            }
        }
    }
    return position;
}

int main(int argc, const char **argv)
{
    int N;
    int k;
    int m;

    cin >> N >> k >> m;

    while (N != 0 && k != 0 && m != 0)
    {
        int positionk = 0;
        int positionm = N - 1;

        vector<int> vec(N);
        for (int i = 0; i < N; i++)
        {
            vec[i] = i + 1;
        }
        while (vec.size() > 0)
        {
            // for (int i = 0; i < vec.size(); i++)
            // {
            //     cout << vec[i];
            // }
            // cout << endl;

            positionk = find_next(vec, positionk, 1, k);
            positionm = find_next(vec, positionm, -1, m);

            if (positionk != positionm)
            {

                imprime(vec, positionk);
                imprime(vec, positionm);

                remove(vec, positionk);
                if (positionk < positionm)
                {
                    positionm--;
                }
                if (positionk == vec.size())
                {
                    positionk = 0;
                }

                remove(vec, positionm);
                if (positionm < positionk)
                {
                    positionk--;
                }
                if (positionm <= 0)
                {
                    positionm = vec.size();
                }
            }
            else
            {
                imprime(vec, positionk);

                remove(vec, positionk);
                if (positionk == vec.size())
                {
                    positionk = 0;
                }

                if (positionm < 0)
                {
                    positionk = vec.size() - 1;
                }
            }
            positionm--;
            if (vec.size() > 0)
            {
                cout << ",";
            }
        }
        cout << endl;
        cin >> N >> k >> m;
    }
    return 0;
}