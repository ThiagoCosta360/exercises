# include <iostream>

using namespace std;

class ASum
{
  public:
  static long long findNb(long long m){
    long n = 1;
    long long t = 1;
    while(t<=m){
      if(t==m){
        return n;
      } else {
        n++;
        t += n*n*n;
      }
      
    }
    return -1;
  }
};

int main() {
    cout << ASum::findNb(4183059834009);
    return 0;
}