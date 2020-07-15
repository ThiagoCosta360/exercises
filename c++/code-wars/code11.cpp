#include <iostream>
#include <vector>
#include <string>
using namespace std;

string who_is_next(const vector<string> &names, long long r)
{
  int position = 0;
  int atual = 3;
  int gatual = 2;
  int size = names.size();

  if (r <= size)
    return names[r - 1];

  for (int i = size + 1; i <= r; i++)
  {
    // cout << i << " " << position << " " << atual << endl;

    if (atual < r - i)
    {
      atual = gatual;
      i += atual - 1;
      position++;
    }
    else
    {
      atual--;
    }
    if (atual == 0)
    {
      position++;
      atual = gatual;
    }
    if (position >= size)
    {
      position = 0;
      gatual *= 2;
      atual = gatual;
    }
    // cout << i << " " << position << " " << atual << endl;
  }

  return names[position];
}

int main(int argc, const char **argv)
{
  vector<string> names = {"Sheldon", "Leonard", "Penny", "Rajesh", "Howard"};
  cout << who_is_next(names, atoi(argv[1])) << endl;

  return 0;
}