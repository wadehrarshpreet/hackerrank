//c-tutorial-strings
#include <iostream>
#include <string>
using namespace std;

int main() {
   // Complete the program
   string a,b;
    cin >> a;
    cin >>b;
    cout << a.size() << " "<<b.size()<<endl;
    cout << a+b<<endl;
    char t = a[0];
    a[0] = b[0];
    b[0] = t;
    cout << a << " "<<b;
    
    return 0;
}
