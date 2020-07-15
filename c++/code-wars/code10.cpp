#include <iostream>
#include <string>
#include <vector>
using namespace std;

auto add(int n)
{
    return ++n;
}

int main() {

    cout << add(1);
    return 0;
}