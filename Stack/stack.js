class Stack{
    constructor(){
        this.stack=[]
    }
    push(data){
        this.stack.push(data)
    }
    pop(){
        this.stack.pop()
    }
    peek(){
      return this.stack[this.stack.length-1]
    }
    contain(element){
     return  this.stack.includes(element)
    }
    revrse(){
        return this.stack.reverse()
    }
    printStack(){
        let good = ''
       for(let i=0;i<=this.stack.length;i++){
         good += this.stack[i] + '\n'
    
       }
       return good
    }
    size(){
      return  this.stack.length-1
    }
    clear (){
        this.stack=[]
    }
    isEmpty(){
       return  this.stack.length==0
    }
}
let myst = new Stack
myst.push(1)
myst.push(2)
myst.push(3)
myst.push(44)
myst.push(18)

console.log(myst.printStack());
console.log(myst.peek());
console.log(myst.contain(18));
myst.revrse()
console.log(myst.printStack());
console.log(myst.size());
console.log(myst.clear());
console.log(myst.isEmpty());


