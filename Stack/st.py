class stack:
    def __init__(self):
        self.stack=[]
    def push(self,data):
        self.stack.append(data)
    def pop(self,index=0):
        self.stack.pop(index)
    def contain(self,data):
        if data in self.stack:
            return True
        return False
    def sort(self):
        return sorted(self.stack)
    def print_stack(self):
        return self.stack
    def length(self):
        return len(self.stack)
    def peek(self):
        return self.stack[0]

    
st = stack()
st.push(21)
st.push(9)
st.push(11111111111)
print(st.contain(21))
print(st.sort())
print(st.print_stack())
print(st.length())
print(st.peek())
