class Queue {
    constructor(){
        this.queue = []
    }
    enqueue(data){
        this.queue.push(data)
    }
    dequeue(){
        if (this.isEmpty()) {
            return "Queue is Empty"
        }
        this.queue.shift()
    }
    isEmpty(){
       return this.queue.length === 0
    }
    peek(){
        if (this.isEmpty()) {
            return "Queue is Empty"
        }
        return this.queue[0]
    }
    size(){
        this.queue.length()
    }
    clear(){
        this.queue=[]
    }
    contain(data){
        this.queue.includes(data)
    }
    printQueue(){
        let str=""
        for(let i =0;i<=this.queue.length;i++){
            str += this.queue[i] + "\n"
        }
        return str
    }
}

let myq = new Queue
myq.enqueue(3)
myq.enqueue(242)
myq.enqueue(534)
myq.enqueue(343)
 
console.log(myq.printQueue());
myq.dequeue()

console.log(myq.printQueue());
