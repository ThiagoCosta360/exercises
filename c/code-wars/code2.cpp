#include <string>  
#include <sstream>  
#include <iostream>

using namespace std;

int digital_root(int n)
{
    stringstream ss;
    string str;    
    int soma = 0;
    ss << n;
    ss >> str;
    for (int i = 0;i<str.length();i++)
    {
        soma += (int)str[i] -(int)'0';
    }
    if(soma>9){
        return digital_root(soma);
    }
    return soma;
}
/* BRUHH? */
int digital_root2(int Z) {
    return --Z % 9 + 1;
}



int main()
{

    printf("%d", digital_root(195));

    return 0;
}