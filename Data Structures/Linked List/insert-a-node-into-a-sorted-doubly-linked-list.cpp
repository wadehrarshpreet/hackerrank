//insert-a-node-into-a-sorted-doubly-linked-list
/*
    Insert Node in a doubly sorted linked list 
    After each insertion, the list should be sorted
   Node is defined as
   struct Node
   {
     int data;
     Node *next;
     Node *prev;
   }
*/
Node* SortedInsert(Node *head,int data)
{
    Node *start = head;
    Node *ptr=  new Node();
    ptr->data = data;
    if(head == NULL){
    	ptr->next = NULL;
        ptr->prev = NULL;
        start = ptr;
    }
    else if(head->data >= data){
        //insert at begin
    	ptr->next = head;
        ptr->prev = head->prev;
        head->prev = ptr;
        start = ptr;
    }
    else{
    	start = head;
        while(head != NULL){
        	if(head->data >= data){
        		ptr->next = head;
                ptr->prev = head->prev;
    			head->prev->next = ptr; 
    			head->prev = ptr;
                break;
            }
            if(head->next == NULL){
            	//insert at end
            	ptr->next = NULL;
            	ptr->prev = head;
            	head->next = ptr;
            	break;
            }
            head= head->next;
        }
    }
    return start;
    // Complete this function
   // Do not write the main method. 
}
