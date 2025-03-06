import pathlib
class Node:
    def __init__(self,data,next = None):
       self.data = data
       self.next = next
    
class LinkedList:
    def __init__(self,head=None):
        self.head = None

    def insertElementAtBegin(self,ele):
        node = Node(ele,self.head)
        self.head = node
        return
    
    def insertAtLast(self,ele):
        node =  Node(ele)
        if(self.head == None):
            self.head = node
            return
        
        last = self.head 
        while(last.next != None):
            last = last.next
        last.next = node
        return
        
    
    def insertAny(self,ele,prevnode):
        if(prevnode.next != None):
            self.head = self.head.next
            return
        
        else:
            node = Node(ele,prevnode)
            prevnode.next = node
            return
    
    def DeleteFromBegin(self):
        if(self.head != None):
            self.head = self.head.next
            return
        

    
    def DeletFromEnd(self):
        if(self.head == None):
            print("LinkedList is Empty")
            return
            
            
        if(self.head.next == None):
            self.head = None
            return
        
        slast = self.head
        while(slast.next.next == None):
            slast.next = None
            
        slast=slast.next
        return

    def DeleteFromAny(self,key):
        if(self.head == None):
            print("LinkedList is Empty")
        
        if(self.head.data == key):
            self.head=self.head.next
            return
        
        current = self.head
        while(current.next != None ):
            if(current.next.data == key):
                current.next = current.next.next
                return
            
            current = current.next
        print("No Node Found")

         
    def Search(self,key):
        if(self.head == None):
            print("LinkedList is Empty")
        current = self.head
        if(current.data == key):
            print("Found At :",current)
        
        while(current.next != None):
            if(current.next.data == key):
                return True
            else:
                current= current.next
        
        print("Element is not present in LinkedList : ",key)
    
    def Traverse(self):
        current = self.head
        tr="->"
        lst = []
        while(current):
            (lst.append(str(current.data)))
            current = current.next
        print(tr.join(lst))
       
         
ll = LinkedList()
ll.insertElementAtBegin(32)
ll.insertAtLast(43)
ll.Traverse()
print(ll.Search(43))
# ll.DeleteFromBegin()
ll.Traverse()
        


          
        
        

        



        







        

