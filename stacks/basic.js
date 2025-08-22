class Stack {
	constructor() {
		this.stack = [];
	}

	push(item) {
		this.stack.push(item);
	}

	pop() {
		if (this.stack.length===0) return null;
		return this.stack.pop();
	}

	peek() {
		if (this.stack.length===0) return null;
		return this.stack[this.stack.length-1];
	}

	isEmpty() {
		return this.stack.length === 0;
	}
	
	size() {
		return this.stack.length;
	}
}


const s1 = new Stack();
//s1.push(12);
//s1.push(76);
console.log(s1.peek());
console.log(s1.size());
console.log(s1.pop());
console.log(s1.peek());
console.log(s1.isEmpty());