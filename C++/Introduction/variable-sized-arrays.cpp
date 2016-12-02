//variable-sized-arrays
#include <iostream>
using namespace std;
int main()
{
    int n,q,t,s;
    cin >> n >>q;
    int **a = new int*[n];
    for(int i=0;i<n;i++){
        cin >>t;
        a[i] = new int[t];
        for(int j =0;j<t;j++){
            cin>>a[i][j];
        }
    }
    for(int i=0;i<q;i++)
    {
        cin >> s >>t;
        cout << a[s][t]<<endl;
    }
	return 0;
}
