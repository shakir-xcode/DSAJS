class Graph {
	constructor () {
		this.nodeCount = 0;
		this.graph = {};
	}

	addVertex(node) {
		if (!this.graph[node])
		this.graph[node] = [];
	}
		

	addEdge(node, connectedTo) {
		if(this.graph[node].indexOf(connectedTo) === -1)
		this.graph[node].push(connectedTo);

		if(this.graph[connectedTo].indexOf(node) === -1)
		this.graph[connectedTo].push(node);
	}

	removeEdge (v1, v2) {
		const newListOne = this.graph[v1].filter(edge => edge !== v2);
		this.graph[v1] = newListOne;
	
		
		const newListTwo = this.graph[v2].filter(edge => edge !== v1);
		this.graph[v2] = newListTwo;	

	}
	
	removeVertex (v) {
		delete this.graph[v];

		for (let node in this.graph) {
			const newList = this.graph[node].filter(edge => edge !== v);
			this.graph[node] = newList;
		}
	
	}

	traverseDFSRec(start, visited = []) {
		if(!(visited.indexOf(start) === -1)) return;
		visited.push(start);
		this.graph[start].forEach(node => {
			this.traverse(node, visited);
		})

		return visited;
	}

	traverseDFSIter (start) {
		let visited = {};
		let stack = [start];
		let result = [];
		let node;
		visited[start] = true;
		while (stack.length) {
			console.log(stack)
			node = stack.pop();
			result.push(node);
			this.graph[node].forEach(vertex => {
				if(!visited[vertex]) {
					visited[vertex] = true;
					stack.push(vertex);
				}
			})
		}
		return result;
	} 

	traverseBFS (start) {
		let queue = [];
		let result = [start];
		let currentNeighbors = this.graph[start];
		let visited = {};
		visited[start] = true;
	
		do {
			currentNeighbors.forEach(vertex => {
				if(!visited[vertex]) {
					queue.push(vertex);
					result.push(vertex);
					visited[vertex] = true;
				}
			})
			currentNeighbors = this.graph[queue.shift()]
				
		} while(queue.length)	
		return result;
	
	}

	getGraph() {
		return this.graph;	
	}
}

const grp = new Graph();

grp.addVertex('A')
grp.addVertex('B')
grp.addVertex('C')
grp.addVertex('D')
grp.addVertex('E')
grp.addVertex('F')


grp.addEdge('A', 'B')
grp.addEdge('A', 'C')
grp.addEdge('B', 'D')
grp.addEdge('C', 'E')
grp.addEdge('D', 'E')
grp.addEdge('D', 'F')
grp.addEdge('E', 'F')

//console.log(grp.getGraph());

//grp.removeEdge('4', '2')

//console.log(grp.getGraph());

//grp.removeVertex('1')

console.log(grp.getGraph());

console.log(grp.traverseBFS ('A'))




