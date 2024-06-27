export class CustomWeightedGraphVertex {
    value;
    adjacentVertices;

    constructor(value) {
        this.value = value;
        this.adjacentVertices = {};
    }

    addAdjacentVertex(vertex, weight) {
        this.adjacentVertices[vertex] = weight;
    }

    dijkstraShortestPathPriceBased(startingPoint, finalDestination) {
        let cheapestPricesTable = {};

        let cheapestPreviousStopoverPointTable = {};

        let unvisitedPoints = [];

        let visitedPoints = {};

        cheapestPricesTable[startingPoint.value] = 0;

        let currentPoint = startingPoint;

        while(currentPoint) {
            visitedPoints[currentPoint.value] = true;

            unvisitedPoints.pop(currentPoint);

            for(let [adjacentPoint, price] of currentPoint.adjacentVertices) {
                if(!visitedPoints[adjacentPoint.value]) {
                    unvisitedPoints.push(adjacentPoint);
                }

                let priceThroughCurrentPoint = cheapestPricesTable[currentPoint.value] + price;

                if(!cheapestPricesTable[adjacentPoint.value] || 
                    priceThroughCurrentPoint < cheapestPricesTable[adjacentPoint.value]) {
                        cheapestPricesTable[adjacentPoint.value] = priceThroughCurrentPoint;

                        cheapestPreviousStopoverPointTable[adjacentPoint.value] = currentPoint.value;
                }
            }
            currentPoint = unvisitedPoints.reduce((minPoint, point) => {
                return cheapestPricesTable[point.value] < cheapestPricesTable[minPoint.value] ? point : minPoint;
            }, unvisitedPoints[0]);

        }
        let shortestPath = [];

        let currentPointValue = finalDestination.value;

        while(currentPointValue !== startingPoint.value) {
            shortestPath.push(currentPointValue);

            currentPointValue = cheapestPreviousStopoverPointTable[currentPointValue];
        }
        shortestPath.push(startingPoint.value);

        return shortestPath.reverse();
    }
}