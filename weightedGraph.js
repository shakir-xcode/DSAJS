class Node {
	constructor (vertex, weight) {
		this.vertex = vertex;
		this.weight = weight;
	}
}


class WeightedGraph {
	constructor() {
		this.graph = {};
	}
	
	insertVertex (vertex) {
		if (!this.graph[vertex])
			this.graph[vertex] = [];
	}

	insertEdge (vertex, node) {
		this.graph[vertex].push(node);
		
		this.graph[node.vertex].push({...node,vertex});
	} 	
}

const grp = new WeightedGraph();
grp.insertVertex('A');
grp.insertVertex('B');
grp.insertVertex('C');

grp.insertEdge('A', new Node('B', 10));
grp.insertEdge('A', new Node('C', 8));

grp.insertEdge('B', new Node('C', 6));

console.log(grp.graph);



