class Tree{
    constructor(root){
        this.leftLeaf = null
        this.root = root
        this.rightLeaf = null
    }
    insert(data){
        if(data > this.root){
            if(this.rightLeaf == null){
                this.rightLeaf = new Tree(data)
            }
            if(this.rightLeaf != null){
                this.rightLeaf.insert(data)
            }
        }
        if(data < this.root){
            if(this.leftLeaf == null){
                this.leftLeaf = new Tree(data)
            }
            if(this.leftLeaf != null){
                this.leftLeaf.insert(data)
            }
        }
    }
    print(counter){
        counter += 4
        var tab = ' '
        if(this.leftLeaf !== null){
            this.leftLeaf.print(counter)
        }
        console.log(tab.repeat(counter) + `${this.root}`)
        if(this.rightLeaf !== null){
            this.rightLeaf.print(counter)
        }
    }

    find(number){
        if(number > this.root){
            if(this.rightLeaf !== null){
                this.rightLeaf.find(number)
            }
            else{
                console.log(`${number} does not exist`)
            }
        }
        if(number === this.root){
            console.log(`${number} exist`)
        }
        if(number < this.root){
            if(this.leftLeaf !== null){
                this.leftLeaf.find(number)
            }
            else{
                console.log(`${number} does not exist`)
            }
        }
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateArray(min, max){
    count = max - min
    array = []
    while(count){
        number = getRandomInt(min, max)
        if(array.includes(number)){}
        else{
            array.push(number)
            count--
        }
    }
    return array
}


array = generateArray(1,15)
const tree = new Tree(array[array.length - 1])
array.pop()
for(var i = 0; i < array.length; i++){
    tree.insert(array[i])
}
tree.print(0)
tree.find(20)

