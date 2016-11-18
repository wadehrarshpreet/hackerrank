//delete-a-node-from-a-linked-list
/*
  Delete Node at a given position in a linked list 
  Node is defined as 
  struct Node
  {
     int data;
     struct Node *next;
  }
*/
Node* Delete(Node *head, int position)
{
    Node *start = head;
    int i =0;
    if(position ==0){
        if(head==NULL)
            return head;
        Node *ptr = head;
        head = ptr->next;
        delete ptr;
        return head;
    }
    while(start->next != NULL){
        if(i == position -1){
            Node *ptr=start->next;
            start->next = ptr->next;
            delete ptr;
            break;
        }
        start = start->next;
        i++;
    }
    return head;
}
