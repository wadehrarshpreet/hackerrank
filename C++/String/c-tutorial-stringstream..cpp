//c-tutorial-stringstream
#include <sstream>
#include <vector>
#include <iostream>
using namespace std;

vector<int> parseInts(string str) {
   // Complete this function
    stringstream ss(str);
    char ch;
    int a,b,c;
    vector<int> d;
    int token;
    while(ss >> token) {
        d.push_back(token);
        if(ss.peek() == ',')
            ss.ignore();
    }
    return d;
}

int main() {
    string str;
    cin >> str;
    vector<int> integers = parseInts(str);
    for(int i = 0; i < integers.size(); i++) {
        cout << integers[i] << "\n";
    }
    
    return 0;
}
