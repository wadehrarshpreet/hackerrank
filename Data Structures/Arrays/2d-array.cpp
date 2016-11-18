//2d-array
#include <map>
#include <set>
#include <list>
#include <cmath>
#include <ctime>
#include <deque>
#include <queue>
#include <stack>
#include <string>
#include <bitset>
#include <cstdio>
#include <limits>
#include <vector>
#include <climits>
#include <cstring>
#include <cstdlib>
#include <fstream>
#include <numeric>
#include <sstream>
#include <iostream>
#include <algorithm>
using namespace std;


int main(){
    vector< vector<int> > arr(6,vector<int>(6));
    for(int arr_i = 0;arr_i < 6;arr_i++){
       for(int arr_j = 0;arr_j < 6;arr_j++){
          cin >> arr[arr_i][arr_j];
       }
    }
    vector <int> sum;
    for(int i=0;i<arr.size()-2;i++){
        for(int j=0;j<arr.size()-2;j++){
            int temp = 0;
            for(int k=0;k<3;k++)
                temp += arr[i][j+k];
            temp+= arr[i+1][j+1];
            for(int k=0;k<3;k++)
                temp += arr[i+2][j+k];
            sum.push_back(temp);
        }    
    }
    cout << *max_element(sum.begin(), sum.end());;
    return 0;
}
