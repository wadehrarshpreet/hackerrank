//insertionsort2
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

void print(vector<int> a){
    for(int i=0;i<a.size();i++){
        cout << a[i]<<" ";
    }
    cout <<endl;
}

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for(int i=0;i<n;i++){
        cin >> a[i];
    }
    
     
    for(int i=1;i<n;i++){
        
        for(int j=i;j>0;j--){
            if(a[j-1]>a[j]){
                //swap
                int temp = a[j];
                a[j] = a[j-1];
                //print array
                a[j-1] = temp;
     
            }
            else
                break;
        }
            print(a);
        
    }
       

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
    return 0;
}
