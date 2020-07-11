#include <iostream>
#include <math.h>
#include <string>

using namespace std;

int main(){
    int m = 0;
    cin >> m;

    for (int i = 1; i <= m; i++)
    {

        cout << i << " " << to_string((long long int)pow(i, 2)) << " " << to_string((long long int)pow(i, 3)) << endl;
        cout << i << " " << to_string((long long int)pow(i, 2)+ 1)  << " " << to_string((long long int)pow(i, 3)+ 1)  << endl;
    }

    return 0;
}