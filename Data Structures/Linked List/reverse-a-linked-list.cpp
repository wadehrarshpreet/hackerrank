//reverse-a-linked-list
/*
  Reverse a linked list and return pointer to the head
  The input list will have at least one element  
  Node is defined as 
  struct Node
  {
     int data;
     struct Node *next;
  }
*/
Node* Reverse(Node *head)
{
    Node *temp,*init;
    if(head == NULL)
        return head;
    init = NULL;
    while(head != NULL){
        temp = head->next;
        head->next = init;
        init = head;
        head = temp;
    }
    return init;
  // Complete this method
}
