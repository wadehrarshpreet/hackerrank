//palindrome-index
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int t;
    cin >> t;
    while(t--)
        {
        string s;
        int n,index,flag=0;
        cin >> s;
        n=s.length();
        
        for(int i = 0 ; i < n/2 ; i++)
            {
            if(s[i] != s[n-i-1])
                {
                index =i;
                flag=1;
                break;
            }
        }
        if(flag == 0)
            {
            cout << "-1"<< endl;
            continue;
        }
        flag = 0;
        for(int i =0,j = 0 ; i<n/2 ; i++)
            {
              if(i == index)
              continue;
              if(s[i] != s[n-j-1])
               {
                    flag = 1;
                    break;
               }
                j++;
            }

         if(flag)
             cout << (n-index-1) << endl;
         else
             cout << index << endl;
    }
    return 0;
}
