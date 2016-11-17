//compare-the-triplets
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    vector<int> a(3),b(3);
    for(int i=0;i<3;i++)
        cin>>a[i];
    for(int i=0;i<3;i++)
        cin>>b[i];
    int p1=0,p2=0;
    for(int i=0;i<3;i++){
        if(a[i]>b[i])
            p1++;
        else if(a[i]<b[i])
            p2++;
    }
    cout << p1 <<" "<<p2;
    return 0;
}
