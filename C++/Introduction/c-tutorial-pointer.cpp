//c-tutorial-pointer
#include <stdio.h>
#include <cstdlib>

void update(int *a,int *b) {
    // Complete this function    
    int t = *a;
    *a+=*b;
    t-=*b;
    if(t<0)
        *b = -1 * t;
    else
        *b = t;
}

int main() {
    int a, b;
    int *pa = &a, *pb = &b;
    
    scanf("%d %d", &a, &b);
    update(pa, pb);
    printf("%d\n%d", a, b);

    return 0;
}
