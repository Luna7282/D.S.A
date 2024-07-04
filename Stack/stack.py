class Stack:
    def __init__(self):
        self.stack = []

    def push(self,data):
          return  self.stack.append(data)   # can also use insert instead of appnd

    def pop(self):
         return self.stack.pop()  

    def peek(self):
         return  self.stack[0]

    def conatin(self,key):
        return key in self.stack
    
    def size(self):
        return self.stack.__len__
     
    def isEmpty(self):
        return self.stack == []
    
    def PrintStack(self):
        return str(self.stack)


s = Stack()
s.push(2)
s.push(9)
s.push(3)

print(s.PrintStack())