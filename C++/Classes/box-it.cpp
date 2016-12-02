//box-it
#include<bits/stdc++.h>

using namespace std;



//Implement the class Box  
class Box{
    int l,b,h;
    public:
    Box(){
        l=b=h=0;
    }
    Box(int i,int j,int k){
        l=i;b=j;h=k;
    }
    Box(Box& i){
        l = i.getLength(); 
        b = i.getBreadth();
        h = i.getHeight();
    }
    int getLength(){
        return l;
    }
    int getBreadth(){
        return b;
    }
    int getHeight(){
        return h;
    }
    long long CalculateVolume(){
        return (long long)l*b*h;
    }
    bool operator<(const Box &_b){
		if(l<_b.l)return true;
		if(l>_b.l)return false;
		if(b<_b.b)return true;
		if(b>_b.b)return false;
		return h<_b.h;
	}
    ~Box(){
        
    }
};
ostream& operator<<(ostream& output,Box& B)
{
    output << B.getLength() << " "<<B.getBreadth() << " " << B.getHeight();    
    return output;
}
//l,b,h are integers representing the dimensions of the box

// The class should have the following functions : 

// Constructors: 
// Box();
// Box(int,int,int);
// Box(Box);


// int getLength(); // Return box's length
// int getBreadth (); // Return box's breadth
// int getHeight ();  //Return box's height
// long long CalculateVolume(); // Return the volume of the box

//Overload operator < as specified
//bool operator<(Box& b)

//Overload operator << as specified
//ostream& operator<<(ostream& out, Box& B)


void check2()
{
	int n;
	cin>>n;
	Box temp;
	for(int i=0;i<n;i++)
	{
		int type;
		cin>>type;
		if(type ==1)
		{
			cout<<temp<<endl;
		}
		if(type == 2)
		{
			int l,b,h;
			cin>>l>>b>>h;
			Box NewBox(l,b,h);
			temp=NewBox;
			cout<<temp<<endl;
		}
		if(type==3)
		{
			int l,b,h;
			cin>>l>>b>>h;
			Box NewBox(l,b,h);
			if(NewBox<temp)
			{
				cout<<"Lesser\n";
			}
			else
			{
				cout<<"Greater\n";
			}
		}
		if(type==4)
		{
			cout<<temp.CalculateVolume()<<endl;
		}
		if(type==5)
		{
			Box NewBox(temp);
			cout<<NewBox<<endl;
		}

	}
}

int main()
{
	check2();
}