//print-the-elements-of-a-linked-list-in-reverse
/*
  Print elements of a linked list in reverse order as standard output
  head pointer could be NULL as well for empty list
  Node is defined as 
  struct Node
  {
     int data;
     struct Node *next;
  }
*/
void ReversePrint(Node *head)
{
    if(head == NULL)
        return;
    if(head->next != NULL)
        ReversePrint(head->next);
    cout << head->data<<endl;
    
  // This is a "method-only" submission. 
  // You only need to complete this method. 
}
