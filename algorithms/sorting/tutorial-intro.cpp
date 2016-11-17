//tutorial-intro
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int n,a,found=-1;
    int ele;
    cin >> ele;
    cin >>n;
    for(int i=0;i<n;i++){
        cin >> a;
        if(a==ele)
            found=i;
    }
    cout << found;
    
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
    return 0;
}
