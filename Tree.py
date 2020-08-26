import random
class Tree:
    def __init__(self, node:int = 0):
        self.root = node
        self.left = None
        self.right = None
    
    def insertData(self, number:int):
        if number > self.root:
            if self.right == None:
                self.right = Tree(number)
            if self.right != None:
                self.right.insertData(number=number)
        if number < self.root:
            if self.left == None:
                self.left = Tree(number)
            if self.left != None:
                self.left.insertData(number=number)
    
    def findData(self, number:int = 0):
        if number > self.root:
            self.right.findData(number)
        if number < self.root:
            self.left.findData(number)
        if number == self.root:
            print("Element was found")

    def printTree(self, counter:int = 0):
        counter += 4
        tab = ' '*counter
        if self.left:
            self.left.printTree(counter=counter)
        print(tab, self.root)
        if self.right:
            self.right.printTree(counter=counter)

array = [random.randint(1,15) for i in range(10)]
print(array)
tree = Tree(array[0])
array.pop(0)
for elem in array:
    tree.insertData(elem)
tree.printTree()
tree.findData(7)
