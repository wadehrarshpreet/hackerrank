//classes-objects
// Write your Student class here
class Student{
    int marks[5];
    public:
    void input(){
        for(int i=0;i<5;i++)
            cin >> marks[i];
    }
    int calculateTotalScore(){
        int sum =0 ;
        for(int i=0;i<5;i++)
            sum+=marks[i];
        return sum;
    }
};