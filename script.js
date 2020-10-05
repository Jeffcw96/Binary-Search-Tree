class BinarySearchTree {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }

    insert = (val) => {
        //assign left if input value is lesser than the current node value
        //assign right if input value is lesser than the current node value
        let currentNode = val > this.value ? "right" : "left";

        //recursively check & compare with the child node until there is no child node left
        if (this[currentNode]) {
            this[currentNode].insert(val);
        } else {
            this[currentNode] = new BinarySearchTree(val)
        }
    }

    max = () => {
        //As BST is naturally sorted, deepest node from right path will be the highest value of the tree
        let maxVal = this.right;
        while (maxVal) {
            maxVal = maxVal.right;

            //if the tree doesnt have the child node, get current value and break
            if (maxVal.right == null) {
                maxVal = maxVal.value
                break
            }
        }
        console.log("maxVal", maxVal);
    }

    min = () => {
        //As BST is naturally sorted, deepest node from left path will be the smallest value of the tree
        let minVal = this.left;
        while (minVal) {
            minVal = minVal.left;
            if (minVal.left == null) {
                minVal = minVal.value
                break
            }
        }
        console.log("minVal", minVal);
    }

    //similar concept with insert method.
    contain = (val) => {
        let currentNode = val > this.value ? this.right : this.left;
        while (currentNode) {
            if (val == currentNode.value) {
                return true
            }
            if (val < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return false
    }

}

//Insert value 50 as the root value
let BST = new BinarySearchTree(50);

BST.insert(38);
BST.insert(55);
BST.insert(45);
BST.insert(46);
BST.insert(43);
BST.insert(68);
BST.insert(66);
BST.insert(85);
BST.insert(35);
BST.insert(23);


BST.contain(3) // return false
BST.contain(68) // return true

BST.max() // return 85
BST.min() // return 23
