#include <iostream>
#include <vector>

using namespace std;

vector<int> solution(vector<int> &A, int K)
{
    if (A.size() == 0)
    {
        return A;
    }
    for (int j = 0; j < K; j++)
    {
        int aux = A[A.size() - 1];

        for (int i = A.size() - 1; i > 0; i--)
        {
            A[i] = A[i - 1];
        }
        A[0] = aux;
    }

    return A;
}

int main()
{
    vector<int> vec{};

    solution(vec, 3);

    for (int i = 0; i < vec.size(); i++)
    {
        cout << vec[i] << endl;
    }

    return 0;
}