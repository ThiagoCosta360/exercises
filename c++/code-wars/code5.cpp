// #include <iostream>
// #include <string>

// using namespace std;

// string spinWords(const string &str)
// {
//     int position = 0;
//     int count = 0;
//     string aux = "";
//     string nstr = "";

//     for (char c : str)
//     {
//         if (c == ' ')
//         {
//             aux = str.substr(position, count - position);
//             position = count + 1;

//             if (aux.length() > 4)
//             {
//                 for (int i = aux.length()-1; i >= 0; i--)
//                 {
//                     nstr.append(1, aux[i]);
//                 }
//                 nstr += ' ';
//             }
//             else
//             {
//                 nstr.append(aux);
//                 nstr += ' ';
//             }
//         }
//         count++; // cout << position << endl;
//     }
//     aux = str.substr(position, count - position);

//     // cout << aux << endl;
//     if (aux.length() > 4)
//     {
//         for (int i = aux.length()-1; i >= 0; i--)
//         {
//             nstr.append(1, aux[i]);
//         }
//     }
//     else
//     {
//         nstr.append(aux);
//     }
//     return nstr;

// } // spinWords


#include <string>
#include <algorithm>
#include <sstream>
std::string spinWords(const std::string &str)
{
    std::stringstream ss(str);
    std::string result;
    std::string buff;
    while (ss >> buff) {
        if (buff.size() >= 5) {
            std::reverse(buff.begin(), buff.end());
        }
        result += buff + ' ';
    }
    result.pop_back();
    return result;
}


int main()
{
    string str = "Testando a funcAO";
    // cout << str.substr(8, 2);
    cout << spinWords(str) << endl;
    return 0;
}