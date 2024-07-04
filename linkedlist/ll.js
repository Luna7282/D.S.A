class Node{
  constructor(data,next =null){
   this.data = data
   this.next = next
  }
}

class linkedlist {
    constructor(){
        this.head =null
    }
}
// insert at begiening
linkedlist.prototype.insertAtBegining = function (data){
  const newnode = new Node(data)
  this.head = newnode
}

// insert at end
linkedlist.prototype.insertatlast = function(data){
const newnode = new Node(data)
if(!this.head){
  this.head = newnode
}

let last = this.head  // false
while(!this.head){
    last = last.next
}
last.next = newnode

}
// insert at Anywhere

linkedlist.prototype.insertAfter = function (data, prevNode){
    if(!prevNode){
        console.log("please provide previous node");
    }

    const newnode = new Node(data,prevNode.next)
       prevNode.next = newnode

}


// delete an element from beginning
linkedlist.prototype.DeleteElementfromBeg= function(){
  if(!this.head){
    console.log("Linkedlist is Empty");
  }
  this.next = this.head
}

// delete element From last 
linkedlist.prototype.delElemFromLast= function(){
  if(!this.head){
    console.log("Linkedlist is Empty");
  }
  if(!this.head.next ){
    this.head = null   // if there is only one value i L.L.
    return
  }
  let slast = this.head
    while(this.slast.next.next){
      slast = slast.next
    }

  slast.next=null
  }

// delete element at a given key
 linkedlist.prototype.delFromAny= function(key){
  if(!this.head){
    console.log("Linkedlist is Empty");
  }
  // value at head
   if(this.head.data === key){
    this.head = this.head.next
   }

   let current = this.head

   while(current.next !== null){
    if(current.next.data === key){
      current.next = current.next.next
      return
    }
    current.next=current
   }

   console.log(`No node Found with key : ${key}`);
}

   // searching in L.L.
   linkedlist.prototype.Serc=function(key){
   let current = this.head
    while(current){
      if(current.data===key){
        return true
      }
      current = current.next
    }
    return false
   }
  
// Traversal in L.L
linkedlist.prototype.Trav=function(){
  let current = this.head
   let listv = []
   while(current){
    listv.push(current.data); // add data to array
    current = current.next // move to next node
   }
   console.log(listv.join(" -> "));
}
linkedlist.prototype.reverse=function(){
let current = this.head
let prev = null
let next = null
while(current){
    next = current.next
    current.next = prev
    prev = current
    current = next
}
this.head = prev

}

linkedlist.prototype.che=function(){
  let last = this.head
    while(last.next && last.next.next){
        if( last.next.next==this.head.next){
            return true
        }
        last=last.next
    }
    return false
}


let ll = new linkedlist
ll.insertAtBegining(32)
ll.insertAfter(12,32)
ll.insertAfter(21,2)
ll.insertatlast(23)
ll.insertatlast(34)

console.log(ll.Serc(12));
ll.Trav()
ll.reverse()
ll.Trav()
