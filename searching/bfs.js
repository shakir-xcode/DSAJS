function bfs(start) {
	let queue = [start];
	let result = [];
	let item;

	while(queue.length) {
		item = queue.shift();
		result.push(item.data);	
		if (item.left) queue.push(item.left);
		if (item.right) queue.push(item.right);		
	}

	return result;
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

