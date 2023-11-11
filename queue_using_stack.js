class Stack {
	constructor() {
		this.arr = [];
		this.top = -1;	
	}

	
	push(item) {
		this.arr[++this.top] = item;
		//return this.arr;
	}

	pop() {
		if(this.top === -1) return 'stack underflow';
		const poppedItem = this.arr[this.top--]; 
		if (this.arr.length  > 0) this.arr.length--
		return poppedItem;
	}

	peek() {
		return this.top === -1? null : this.arr[this.top];
	}

	empty () {
		return this.top === -1? true : false;
	}
}

class Queue {
	constructor() {
		this.s1 = new Stack();
		this.s2 = new Stack();
		
	}

	enqueue (item) {
		this.s1.push(item);
		return this.s1.arr;
	}

	dequeue () {
		if(this.s2.top === -1) {
			while(this.s1.top !== -1){
				this.s2.push(this.s1.pop());
			}
		}
		this.s2.pop();
		return this.s2.arr;	
	}

	peek () {
		if(this.s2.top === -1) {
			while(this.s1.top !== -1)
				this.s2.push(this.s1.pop());
		}
		return this.s2.peek()
	}
	
	empty() {
		return this.s1.empty() && this.s2.empty()
	}
}


const qu = new Queue();

console.log(qu.enqueue('apple'));
console.log(qu.enqueue('banana'));
console.log(qu.enqueue('coffee'));
console.log(qu.dequeue());
console.log(qu.peek());
console.log(qu.enqueue('table'))
console.log(qu.dequeue());
console.log(qu.dequeue());
console.log(qu.empty());
console.log(qu.dequeue());
console.log(qu.empty());











