function PrototypeBinarySearchTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

PrototypeBinarySearchTree.prototype.insert = function (val) {
    // 1. Check the inserted value is bigger or lesser to the root node value
    // 2. Assign Left if lesser than and right if greater than
    // 3. Check if current tree node got child tree node
    // 4. Compare the inserted value with it's child tree node value if it's not null, create a tree nodes if it's null
    //console.log("this value", this.value, "val", val);
    let treeNode = val < this.value ? "left" : "right";
    //console.log("this", this);
    if (this[treeNode]) {
        this[treeNode].insert(val);
    } else {
        this[treeNode] = new PrototypeBinarySearchTree(val);
    }
}



class BinarySearchTree {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }

    insert = (val) => {
        let treeNode = val > this.value ? "right" : "left";
        if (this[treeNode]) {
            this[treeNode].insert(val);
        } else {
            this[treeNode] = new BinarySearchTree(val)
        }
    }

    max = () => {
        //get root right
        let maxVal = this.right;
        while (maxVal) {
            //get tree right
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

    contain = (val) => {
        let currentNode = val > this.value ? this.right : this.left;
        while (currentNode) {
            console.log("currentNode >>", currentNode);
            if (val == currentNode.value) {
                return true
            }

            if (val < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
            console.log("currentNode >>", currentNode);
        }
        return false
    }

}

let PBST = new PrototypeBinarySearchTree(50)
let BST = new BinarySearchTree(50);
function insertTreeNode() {
    var nodeVal = document.getElementById("nodeVal").value;
    BST.insert(nodeVal);
    PBST.insert(nodeVal);
}

function maxTreeVal() {
    BST.max();
}

function minTreeVal() {
    BST.min();
}

function containTreeVal() {
    var nodeVal = document.getElementById("nodeVal").value;
    let isContain = BST.contain(nodeVal);

    if (isContain) {
        console.log("FOUND");
    } else {
        console.log("NOT FOUND");
    }
}
