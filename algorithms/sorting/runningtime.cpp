//runningtime
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int n,count=0;
    cin >> n;
    vector<int> a(n);
    for(int i=0;i<n;i++){
        cin >> a[i];
    }
    for(int i=0;i<n;i++){
        for(int j=i;j>0;j--){
            if(a[j-1]>a[j]){
                //swap
                count++;
                int temp = a[j];
                a[j] = a[j-1];
                a[j-1] = temp;
            }
            else
                break;
        }
    }
    cout << count;
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
    return 0;
}
