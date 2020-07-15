#include <iostream>
#include <string>
#include <vector>

using namespace std;

string tickets(const vector<int> &peopleInLine)
// {
//     int total25 = 0;
//     int total50 = 0;
//     for (int i : peopleInLine)
//     {
//         cout << total25 << " " << total50 << " " << i << endl;
//         if (i == 25)
//         {
//             total25++;
//         }
//         else if (i == 50)
//         {
//             if (total25 >= 1)
//             {
//                 total25--;
//                 total50++;
//             }
//             else
//             {
//                 return "NO";
//             }
//         }
//         else if (i == 100)
//         {
//             if ((total25 >= 1 && total50 >= 1))
//             {
//                 total50--;
//                 total25--;
//             }
//             else if (total25 >= 3)
//             {
//                 total25 -= 3;
//             }
//             else
//             {
//                 return "NO";
//             }
//         }
//     }
//     return "YES";
// }
{
  int count[2] = {0,0};
  for(auto v: peopleInLine) {
    if(v == 25) count[0]++;
    if(v == 50) {count[1]++; count[0]--;}
    if(v == 100) {count[0]--; count[1]>0? count[1]-- : count[0]-=2;}
    if(count[0]<0||count[1]<0) return "NO";
  }
  return "YES";
}

int main()
{

    cout << tickets({50, 25});
    return 0;
}