#include <iostream>
#include <string>

using namespace std;

bool solution(std::string const &str, std::string const &ending)
{
    int i = str.length()-1;
    int j = ending.length()-1;
    for (j; j>=0; j--){
        // cout << str << endl;
        // cout << ending <<  endl;
        cout << str[i] << endl; 
        cout << ending[j] << endl;
        if (str[i] != ending[j]){
            return false;
        }
        i--;
    }
    return true;
}

bool solution2(const std::string& str, const std::string& ending) {
  return str.size() >= ending.size() && str.compare(str.size() - ending.size(), std::string::npos, ending) == 0;
}

int main()
{
    if (solution("abcde", "ecde"))
    {
        cout << "true";
    }
    else
    {
        cout << "false";
    }
}