class Node {
	constructor(value) {
		this.data = value;
		this.left = null;
		this.right = null;
	}
}

class Bst {
	constructor () {
		this.root = null;
	}
	
	insert (item) {
		const node = new Node(item);
		if(this.root === null) {
			this.root = node;
			return this;
		}
		else {
			let ptr = this.root;
			while(true) {
				if(item < ptr.data){
					if(!ptr.left) {
						ptr.left = node;
						return this;
					}
					ptr = ptr.left;
				}
				else {
					if(!ptr.right) {
						ptr.right = node;
						return this;
					}
					ptr = ptr.right;
				}
			}
		}
	} 
	
	lookup (item) {
		let ptr = this.root;
		while(true) {
			if (!ptr) return null;
			if(item === ptr.data) return item;
			if(item < ptr.data) {
				ptr = ptr.left;
			}else {
				ptr = ptr.right;
			}				
		}
	} 

	bfsIter () {
		if (!this.root) return;
		let item;
		let queue = [];
		let visited = [];
		queue.push(this.root);

		while (queue.length !==0 ) {
			item = queue.shift()
			visited.push(item.data);
			if (item.left) 
				queue.push(item.left);
			if (item.right)
				queue.push(item.right);
			
		}

		console.log(visited);
	}

	bfsRecursive(queue, result=[]) {
		if (!this.root) return;
		if (!queue.length) return result;
		
		let item = queue.shift();
		result.push(item.data);
		if (item.left) queue.push(item.left);
		if (item.right) queue.push(item.right);
		
		return this.bfsRecursive(queue, result)
	}

	preOrder (node) {
		let data = [];

		function traverse (node) {
			if (!node) return;
			data.push(node.data);
			traverse(node.left);
			traverse(node.right);
		}
		traverse(this.root);
		return data;
	}

	inOrder (node) {
		let data = [];

		function traverse (node) {
			if (!node) return;
			traverse(node.left);
			data.push(node.data);
			traverse(node.right);
		}
		traverse(this.root);
		return data;
	}

	postOrder (node) {
		let data = [];

		function traverse (node) {
			if (!node) return;
			traverse(node.left);
			traverse(node.right);
			data.push(node.data);
		}
		traverse(this.root);
		return data;
	}

		

 
}

const t1 = new Bst();

t1.insert(10);
t1.insert(6);
t1.insert(15);
t1.insert(3);
t1.insert(8);
t1.insert(20);

//console.log('LookUp : ',t1.lookup(44));

t1.bfsIter();
console.log(t1.bfsRecursive([t1.root]));

//console.log(t1.postOrder(t1.preOrder()))
