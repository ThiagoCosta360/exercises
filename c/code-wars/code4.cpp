#include <iostream>

using namespace std;

bool isPrime(int num)
{
    if (num <= 1){
        return false;
    }
    for (int i = 2; i < num; i++)
    {
        if (!(num % i))
        {
            return false;
        }
    }
    return true;
}

int main() {
    // cout << (bool)true;
    cout << isPrime(1);
    return 0;
}