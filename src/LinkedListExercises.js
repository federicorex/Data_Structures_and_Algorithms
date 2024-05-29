import { CustomNode } from "./CustomNode.js";
import { LinkedList } from "./LinkedList.js";

let alternativeDeletion = (nodeToDelete) => {
    nodeToDelete.data = nodeToDelete.nextNode.data;
    nodeToDelete.nextNode = nodeToDelete.nextNode.nextNode;
}

let node1 = new CustomNode("Jurassic");
let node2 = new CustomNode("Park");
let node3 = new CustomNode("III");

let node4 = new CustomNode("4");
let node5 = new CustomNode("5");
let node6 = new CustomNode("6");
let node7 = new CustomNode("7");
let node8 = new CustomNode("8");
let node9 = new CustomNode("9");
let node10 = new CustomNode("10");
let node11 = new CustomNode("11");
let node12 = new CustomNode("12");
let node13 = new CustomNode("13");

node1.nextNode = node2;
node2.nextNode = node3;

node4.nextNode = node5;
node5.nextNode = node6;
node6.nextNode = node7;
node7.nextNode = node8;
node8.nextNode = node9;
node9.nextNode = node10;
node10.nextNode = node11;
node11.nextNode = node12;
node12.nextNode = node13;

let tempNode = node8;

// console.log(node2.nextNode.data);

let linkedList1 = new LinkedList(node1);
let linkedList2 = new LinkedList(node4);

// linkedList1.printAllElements();

// console.log(linkedList1.returnLastElement());
// console.log(linkedList1.reverseList());
alternativeDeletion(tempNode);
linkedList2.printAllElements();
linkedList1.reverseList();
linkedList1.printAllElements();