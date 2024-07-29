// Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
// Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1);
    }
  }

  bfs(start) {
    const visited = new Set();
    const queue = [start];
    const result = [];

    visited.add(start);

    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);

      const neighbors = this.adjacencyList.get(vertex);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return result;
  }

  bfsShortestPath(start, end) {
    const visited = new Set();
    const queue = [[start]];
    visited.add(start);

    while (queue.length > 0) {
      const path = queue.shift();
      const vertex = path[path.length - 1];

      if (vertex === end) {
        return path;
      }

      const neighbors = this.adjacencyList.get(vertex);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          const newPath = path.concat([neighbor]);
          queue.push(newPath);
        }
      }
    }

    return null; // no path
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("D", "E");

/*
  A
 / \
B   C
 \ /
  D
  |
  E
*/

console.log(graph.bfs("A")); // A B C D E
console.log(graph.bfsShortestPath("A", "E")); // A B D E or A C D E
