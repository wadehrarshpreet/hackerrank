//attribute-parser
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <sstream>
#include <map>
#include <algorithm>
using namespace std;


int main() {
    int n,m,j=0,i=0;
    cin >> n >> m;
    string tags[n],tmp,tmp2;
    string gets[m];
    vector<string> top;
    map <string, string> kp;
    getline(cin,tags[0]);
    for(i=0;i<n;i++){
        getline(cin,tags[i]);
        if(tags[i][1] == '/')
            top.pop_back();
        else{
            for(j=1;tags[i][j] != ' ' && tags[i][j] != '>';j++);
            top.push_back(tags[i].substr(1,j-1));
            //check any atribute
            //no-attribute
            if(tags[i][j]=='>')
                continue;
            string temp = tags[i].substr(j+1,tags[i].size()-2-j);//contain attributes;
            stringstream ss(temp);
            string key,value;
            while(ss >> tmp){
                //find parent
                tmp2 = "";
                for(int m=0;m<top.size();m++){
                    if(m == top.size()-1)
                        tmp2+=top[m];
                    else
                        tmp2+=top[m]+".";
                }
                key = tmp2+"~"+tmp;
                ss.ignore();//space
                ss.ignore();//=
                ss.ignore();//space
                ss >> tmp;//value
                value = tmp.substr(1,tmp.size()-2);
                kp[key] = value;
                ss.ignore();
            }

        }
    }
    for(int i=0;i<m;i++){
        getline(cin,gets[i]);
        if(kp.find(gets[i]) == kp.end()){
            cout << "Not Found!";
        }
        else
            cout << kp[gets[i]];
        cout <<endl;
    }
    return 0;
}
