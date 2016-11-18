//reverse-a-doubly-linked-list
/*
   Reverse a doubly linked list, input list may also be empty
   Node is defined as
   struct Node
   {
     int data;
     Node *next;
     Node *prev;
   }
*/
Node* Reverse(Node* head)
{
    if(head == NULL)
        return head;
    Node *temp = head,*t1;
    while(1){
        t1 = temp->next;
        temp->next = temp->prev;
        temp->prev = t1;
        if(t1 == NULL)
            break;
        temp = t1;
    }
    return temp;
    // Complete this function
    // Do not write the main method. 
}
