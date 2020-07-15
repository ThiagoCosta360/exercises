#include <iostream>
#include <sstream>
#include <math.h>
#include <string>

// using namespace std;


// class DigPow
// {
// public:
//     static int digPow(int n, int p)
//     {
//         stringstream ss;
//         string str;
//         int soma = 0;
//         int aux = 0;
//         ss << n;
//         ss >> str;
//         for (int i = 0; i < str.length(); i++)
//         {
//             aux = (int)str[i] - (int)'0';
//             soma += pow(aux, p++);
//         }
//         return soma % n ?  -1 : soma / n;
//     }
// };

#include <cmath>
using namespace std;
class DigPow
{
public:
  static int digPow(int n, int p){
   long long sum=0;
   for(char digit : to_string(n)){
     sum+=pow(digit-'0',p++);
   }
   return (sum/n)*n==sum ? sum/n : -1;
  }
};

int main()
{
    cout << DigPow::digPow(92, 1);
    return 0;
}