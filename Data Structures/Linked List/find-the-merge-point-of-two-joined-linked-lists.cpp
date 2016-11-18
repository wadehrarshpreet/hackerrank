//find-the-merge-point-of-two-joined-linked-lists
/*
   Find merge point of two linked lists
   Node is defined as
   struct Node
   {
       int data;
       Node* next;
   }
*/
int FindMergeNode(Node *headA, Node *headB)
{
    Node *tempA=headA,*tempB=headB;
    int Alen = 0, Blen=0;
    //count element in each list
    while(tempA != NULL){
        Alen++;
        tempA=tempA->next;
    }
    while(tempB != NULL){
        Blen++;
        tempB=tempB->next;
    }
    //bypass the extra node to make list count equal
    while(Alen > Blen){
        headA = headA->next;
        Alen--;
    }
    while(Blen > Alen){
        headB = headB->next;
        Blen--;
    }
    while(headA!=NULL){
        if(headA->next == headB->next){
            return headA->next->data;
        }
        headA = headA->next;
        headB = headB->next;
    }
    return 0;
}
