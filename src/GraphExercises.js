import { CustomVertex } from "./CustomVertex.js";

let alice = new CustomVertex("alice");
let bob = new CustomVertex("bob");
let cynthia = new CustomVertex("cynthia");
let mark = new CustomVertex("mark");
let andrew = new CustomVertex("andrew");
let fred = new CustomVertex("fred");
let anna = new CustomVertex("anna");
let mary = new CustomVertex("mary");
let luke = new CustomVertex("luke");

alice.addAdjacentVertexUndirectedGraph(bob);
alice.addAdjacentVertexUndirectedGraph(cynthia);
alice.addAdjacentVertexUndirectedGraph(luke);
bob.addAdjacentVertexUndirectedGraph(cynthia);
bob.addAdjacentVertexUndirectedGraph(mark);
mark.addAdjacentVertexUndirectedGraph(andrew);
andrew.addAdjacentVertexUndirectedGraph(fred);
fred.addAdjacentVertexUndirectedGraph(anna);
cynthia.addAdjacentVertexUndirectedGraph(bob);
cynthia.addAdjacentVertexUndirectedGraph(mary);

// alice.depthFirstSearchTraverse(alice);
// console.log(alice.depthFirstSearch(alice, "fred"));
// alice.breadthFirstSearchTraverse(alice);
console.log(alice.breadthFirstSearch(alice, "fred"));