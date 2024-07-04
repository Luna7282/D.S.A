class Queue:
    def __init__(self):
        self.queue=[]
    
    def enqueue(self,data):
         return self.queue.append(data)  # can also use insert instead of appnd

    def dequeue(self):
        if(self.queue == []):
            print("Queue is Empty")
        return self.queue.pop()
    
    def isEmpty(self):
       return self.queue == [] 
    
    def peek(self):
        return self.queue[0]
    
    def size(self):
        return self.queue.__len__
    
    def contain(self,key):
        return key in self.queue
    def PRintft(self):
        return str(self.queue)

q = Queue()
q.enqueue(2)
q.enqueue(42)
q.enqueue(33)
q.enqueue(34)

print(q.isEmpty())

print(q.contain(42))
print(q.PRintft())