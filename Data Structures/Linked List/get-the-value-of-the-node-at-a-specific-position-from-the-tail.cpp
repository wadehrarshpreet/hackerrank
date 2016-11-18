//get-the-value-of-the-node-at-a-specific-position-from-the-tail
/*
  Get Nth element from the end in a linked list of integers
  Number of elements in the list will always be greater than N.
  Node is defined as 
  struct Node
  {
     int data;
     struct Node *next;
  }
*/
int GetNode(Node *head,int positionFromTail)
{
    Node *temp,*init;
    init = NULL;
    while(head != NULL){
        temp = head->next;
        head->next = init;
        init = head;
        head = temp;
    }
    int ans = -1,i=0;
    while(init != NULL){
        if(i==positionFromTail){
            ans= init->data;
            break;
        }
        init = init->next;
        i++;
    }
    return ans;
}
