class bstnode{
    constructor(key){
        this.key = key
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    insert (){
        const newnode = new bstnode
        if(newnode=== null){
            this.root = newnode
        }
        else{
      this.insertNode(this.root,newnode)
        }
    }

    insertNode(node,newnode){
        if(newnode.key < node.key){
            if(node.left === null){
                newnode = node.left
            }
            else{
                this.insertNode(node.left,newnode)
            }
        }// can exist same value as key so we can make elif case
        else{
            if(node.right === null){
                newnode = node.right
            }
            else{
                this.insertNode(node.right,newnode)
            }
        }
    }
}