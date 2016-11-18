//delete-duplicate-value-nodes-from-a-sorted-linked-list
/*
  Remove all duplicate elements from a sorted linked list
  Node is defined as 
  struct Node
  {
     int data;
     struct Node *next;
  }
*/
Node* RemoveDuplicates(Node *head)
{
    if(head == NULL)
        return head;
    Node *start = head;
    while(head->next != NULL){
        if(head->data == head->next->data){
            Node *ptr = head->next;
            head->next = ptr->next;
            delete ptr;
        }
        else
        head = head->next;
    }
    return start;
}
