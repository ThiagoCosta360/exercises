#include <iostream>
 
using namespace std;
 
int main() {
 
    int total=7;
    for(int i =1;i<=9;i+=2){
        for (int j=0; j<3 ;j++){
            cout << "I=" << i << " J=" <<total <<endl;
            total--;
        }
        total+=5;
    }
 
    return 0;
}