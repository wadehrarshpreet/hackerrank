//largest-rectangle
#include <cmath>
#include <cstdio>
#include <vector>
#include<stack>
#include <iostream>
#include <algorithm>
using namespace std;

long long getMaxArea(long long hist[], long long n)
{

    stack<long long> s;

    long long max_area = 0; 
    long long tp;  
    long long area_with_top; 

    long long i = 0;
    while (i < n)
    {
        if (s.empty() || hist[s.top()] <= hist[i])
            s.push(i++);
       else
        {
            tp = s.top();  // store the top index
            s.pop();  // pop the top
            area_with_top = hist[tp] * (s.empty() ? i : i - s.top() - 1);
            if (max_area < area_with_top)
            {
                max_area = area_with_top;
            }
        }
    }

   while (!s.empty())
    {
        tp = s.top();
        s.pop();
        area_with_top = hist[tp] * (s.empty() ? i : i - s.top() - 1);

        if (max_area < area_with_top)
            max_area = area_with_top;
    }

    return max_area;
}
int main() {
    long long int n,a[100000];
    cin>>n;
    for(int i=0;i<n;i++)
        cin >> a[i];
    cout << getMaxArea(a,n);    
    return 0;
}
