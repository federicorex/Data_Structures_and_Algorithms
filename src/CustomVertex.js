import { CustomQueue } from "./CustomQueue.js";

export class CustomVertex {
    value;
    adjacentVertices;

    constructor(value) {
        this.value = value;
        this.adjacentVertices = [];
    }

    addAdjacentVertexDirectedGraph(vertex) {
        this.adjacentVertices.push(vertex);
    }

    addAdjacentVertexUndirectedGraph(vertex) {
        if(!this.adjacentVertices.includes(vertex)) {
            this.adjacentVertices.push(vertex);
            vertex.addAdjacentVertexUndirectedGraph(this);
        } else {
            return;
        }
    }

    depthFirstSearchTraverse(vertex, visitedVertices = {}) {
        visitedVertices[vertex.value] = true;

        console.log(vertex.value);

        for(let adjacentVertex of vertex.adjacentVertices) {
            if(visitedVertices[adjacentVertex.value]) {
                continue;
            }
            this.depthFirstSearchTraverse(adjacentVertex, visitedVertices);
        };
    }

    depthFirstSearch(vertex, searchValue, visitedVertices = {}) {
        if(vertex.value === searchValue) {
            return vertex;
        }

        visitedVertices[vertex.value] = true;

        for(let adjacentVertex of vertex.adjacentVertices) {
            if(visitedVertices[adjacentVertex.value]) {
                continue;
            }

            if(adjacentVertex.value === searchValue) {
                return adjacentVertex;
            }

            let vertexWereSearchingFor = this.depthFirstSearch(adjacentVertex, searchValue, visitedVertices);

            if(vertexWereSearchingFor) {
                return vertexWereSearchingFor;
            }
        };

        return null;
    }

    breadthFirstSearchTraverse(startingVertex) {
        let queue = new CustomQueue();

        let visitedVertices = {};

        visitedVertices[startingVertex.value] = true;

        queue.enqueue(startingVertex);

        while(queue.read()) {
            let currentVertex = queue.dequeue();

            console.log(currentVertex.value);

            for(let adjacentVertex of currentVertex.adjacentVertices) {
                if(!visitedVertices[adjacentVertex.value]) {
                    visitedVertices[adjacentVertex.value] = true;
                    
                    queue.enqueue(adjacentVertex);
                }
            }
        }
    }

    breadthFirstSearch(startingVertex, searchValue) {
        let queue = new CustomQueue();

        let visitedVertices = {};

        visitedVertices[startingVertex.value] = true;

        queue.enqueue(startingVertex);

        while(queue.read()) {
            let currentVertex = queue.dequeue();

            if(currentVertex.value === searchValue) {
                return currentVertex;
            }

            for(let adjacentVertex of currentVertex.adjacentVertices) {
                if(!visitedVertices[adjacentVertex.value]) {
                    visitedVertices[adjacentVertex.value] = true;
                    
                    queue.enqueue(adjacentVertex);
                }
            }
        }

        return null;
    }
}