//simple-array-sum
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
    int n,a;
    int sum=0;
    cin >> n;
    for(int i=0;i<n;i++){
        cin >> a;
        sum+=a;
    }
    cout << sum;
    return 0;
}
