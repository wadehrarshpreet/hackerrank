//insert-a-node-at-the-tail-of-a-linked-list
/*
  Insert Node at the end of a linked list 
  head pointer input could be NULL as well for empty list
  Node is defined as 
  struct Node
  {
     int data;
     struct Node *next;
  }
*/
Node* Insert(Node *head,int data)
{
    
    Node *ptr = new Node();
    ptr->data = data;
    ptr->next = NULL;
    Node *start = head;
    if(head == NULL){
        head = ptr;
        return head;
    }
    while(start->next != NULL){
        start = start->next;
    }
    start->next = ptr;
    return head;
}
