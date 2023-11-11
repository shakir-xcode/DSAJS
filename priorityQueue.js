class Node {
	constructor(value, priority) {
		this.data = value;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.queue = [];
	}

	enqueue(item, priority) {
		const node = new Node(item, priority);
		this.queue.push(node);
		let cIdx = this.queue.length - 1;
		while (cIdx > 0) {
			let pIdx = Math.floor((cIdx - 1) / 2);
			let child = this.queue[cIdx];
			let parent = this.queue[pIdx];
			if (child.priority >= parent.priority) return this.queue;
			this.queue[pIdx] = child;
			this.queue[cIdx] = parent;
			cIdx = pIdx;
		}
	}

	dequeue() {
		const minItem = this.queue[0];
		const end = this.queue.pop();
		if (this.queue.length === 0) return minItem;
		this.queue[0] = end;

		let pIdx = 0;

		while (true) {
			let lIdx = (pIdx * 2) + 1;
			let rIdx = (pIdx * 2) + 2;
			let parent = this.queue[pIdx];
			let swap = null;

			if (lIdx < this.queue.length && rIdx < this.queue.length) {
				let leftChild = this.queue[lIdx];
				let rightChild = this.queue[rIdx];
				if (leftChild.priority < rightChild.priority) swap = lIdx;
				else swap = rIdx;

				if (parent.priority < this.queue[swap].priority) return this.minItem;

				this.queue[pIdx] = this.queue[swap];
				this.queue[swap] = parent;
				pIdx = swap;

			}
			else if (lIdx < this.queue.length) {
				swap = lIdx;
				if (parent.priority > this.queue[swap].priority) {
					this.queue[pIdx] = this.queue[swap];
					this.queue[swap] = parent;
				}
				return minItem;
			}
			else
				return minItem;
		}
	}


}

const queue = new PriorityQueue();

queue.enqueue('grapes', 8);
queue.enqueue('apple', 4);
queue.enqueue('banana', 3);
queue.enqueue('banana', 9);
queue.enqueue('banana', 0);


console.log(queue.queue)

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

// console.log(queue.queue)



