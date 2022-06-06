class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }

    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if(newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }

    findNode(valueSearch){

        if(!this.value){
            return false;
        }
        if(valueSearch < this.value){
            if(this.leftChild == undefined)
                return false;
            return this.leftChild.findNode(valueSearch);
        }else if (valueSearch > this.value){
            if(this.rightChild == undefined)
                return false;
            return this.rightChild.findNode(valueSearch)
        }else {
            return true;
        }
    }

    findCommonParent(value1,value2){
        let leftNode = null,rightNode = null;
        if(!this.value){
            return null;
        }
        if(this.value === value1 || this.value === value2){
            return this.value;
        }
        if(this.leftChild !== undefined){
            leftNode = this.leftChild.findCommonParent(value1,value2);

        }

        if(this.rightChild !== undefined){
            rightNode = this.rightChild.findCommonParent(value1,value2);
        }
  


        if(rightNode && leftNode)
        {
            return this.value;
        }else{
            return leftNode ? leftNode : rightNode
        }
    }

    removeNode(parent,value){
        if(!parent){
            return undefined
        }else if(value < parent.value){
            parent.leftChild = this.removeNode(parent.leftChild,value);
        }else if(value > parent.value){
            parent.rightChild = this.removeNode(parent.rightChild,value);
            return parent;
        }else {
            if(!parent.leftChild && !parent.rightChild){
                parent = undefined;
                return parent;
            }else if(!parent.leftChild) {
                parent = parent.rightChild;
                return parent;
            }else if(!parent.rightChild) {
                parent = parent.leftChild;
                return parent;
            }
            let minNode = this.findMinNode(parent.leftChild);
            parent.value = minNode.value;


            parent.leftChild = this.removeNode(parent.leftChild, minNode.value);
            return parent;
        }
    }

    findMinNode(node) {
        if (!node.rightChild)
            return node;
        else
            return this.findMinNode(node.rightChild);
    }
}

const letters1 = ["H", "E", "S", "G", "L", "Y", "I"]
const letters2 = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"];

let bSTree1 = new BSNode()

letters1.forEach(l => bSTree1.insertNode(l))

console.log(bSTree1.findNode("H")) // should print true
console.log(bSTree1.findNode("G")) // should print true
console.log(bSTree1.findNode("Z")) // should print false
console.log(bSTree1.findNode("F")) // should print false
console.log(bSTree1.findNode("y")) // should print false

let bSTree2 = new BSNode()

letters2.forEach(l => bSTree2.insertNode(l))


console.log(bSTree2.findCommonParent("B", "I")) //should return "H"
console.log(bSTree2.findCommonParent("B", "G")) //should return "E"
console.log(bSTree2.findCommonParent("B", "L")) //should return "J"
console.log(bSTree2.findCommonParent("L", "Y")) //should return "R"
console.log(bSTree2.findCommonParent("E", "H")) //should return "J"

const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9)); // will return tree like the first image (the 9 will be deletied) 
    
let nodeWithTwoChildren = new BSNode();
numbers.forEach(n => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)); // will return tree like the second image (the root will be 5) 