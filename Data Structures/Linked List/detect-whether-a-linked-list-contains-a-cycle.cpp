//detect-whether-a-linked-list-contains-a-cycle
/*
Detect a cycle in a linked list. Note that the head pointer may be 'NULL' if the list is empty.

A Node is defined as: 
    struct Node {
        int data;
        struct Node* next;
    }
*/

bool has_cycle(Node* head) {
    // Complete this function
    if(head == NULL)
        return head;
    Node  *node1 = head, *node2 = head;
    while (node1 && node2 && node2->next)
    {
        node1= node1->next;
        node2  = node2->next->next;
        if (node1 == node2)
            return 1;
    }
    return 0;
}
