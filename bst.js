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

	preOrder (node, list = []) {

		list.push(node.data);
		if (node.left)
			this.preOrder(node.left, list);
		if (node.right)
			this.preOrder(node.right, list);
	
		return list;
	}


	inOrder (node, list = []) {
		if(node.left)
			this.inOrder(node.left, list)
		list.push(node.data);
		if(node.right)
			this.inOrder(node.right, list)
		return list;

	}

	postOrder (node, list=[]) {
		if (node.left) 
			this.postOrder(node.left, list);
		if (node.right)
			this.postOrder(node.right, list);
		list.push(node.data);
		
		return list;
	}

		

 
}

const t1 = new Bst();

t1.insert(10);
t1.insert(6);
t1.insert(15);
t1.insert(3);
t1.insert(8);
t1.insert(20);


//console.log(t1.postOrder(t1.preOrder()))
