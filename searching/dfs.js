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