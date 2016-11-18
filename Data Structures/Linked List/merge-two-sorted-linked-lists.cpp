//merge-two-sorted-linked-lists
/*
  Merge two sorted lists A and B as one linked list
  Node is defined as 
  struct Node
  {
     int data;
     struct Node *next;
  }
*/
Node* InsertN(Node *head,int data)
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
Node* MergeLists(Node *headA, Node* headB)
{
    
    Node *start = NULL;
    Node *tmpA = headA,*tmpB = headB,*t;
    int small;
    while(tmpA != NULL || tmpB != NULL){
        Node *ptr = new Node();
        if(tmpA == NULL || (tmpB != NULL && (tmpA->data > tmpB->data))){
            small = tmpB->data;
            t = tmpB->next;
            delete tmpB;
            tmpB= t;
        }
        else{
            small = tmpA->data;
            t = tmpA->next;
            delete tmpA;
            tmpA= t;
        }
        start = InsertN(start,small);
    }
    return start;
}