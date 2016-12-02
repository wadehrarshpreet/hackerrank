//c-tutorial-basic-data-types
#include <iostream>
#include <cstdio>
#include <iomanip>
using namespace std;

int main() {
    // Complete the code.
    int a;
    long b;
    long long c;
    char d;
    float e;
    double f;
    cin >> a >>b>>c>>d>>e>>f;
    cout.precision(9);
    cout << a<<endl<<b<<endl<<c<<endl<<d<<endl<<e<<endl<<fixed<<f<<endl;
    return 0;
}
