//insert-a-node-at-a-specific-position-in-a-linked-list
/*
  Insert Node at a given position in a linked list 
  head can be NULL 
  First element in the linked list is at position 0
  Node is defined as 
  struct Node
  {
     int data;
     struct Node *next;
  }
*/
Node* InsertNth(Node *head, int data, int position)
{
    Node *ptr = new Node();
    ptr->data = data;
    int i =0;
    if(position ==0){
        if(head != NULL)
        ptr->next = head;
        else
        ptr->next = NULL;
        head = ptr;
        return head;
    }
    Node *temp = head;
    while(head->next != NULL){
        if(i==position-1){
            ptr->next = head->next;
            head->next = ptr;
            break;
        }
        head = head->next;
        i++;
    }
    return temp;
}
