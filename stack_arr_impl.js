class Stack {
	constructor() {
		this.top = -1;
		this.bottom = -1;
		this.arr = [];	
	}

	push (item) {
		this.arr[++this.top] = item;
		if(this.bottom === -1) this.bottom = 0;
		return this;
	}

	pop () {
		if (this.top === -1) return this;	
		this.arr.length--;
		if (--this.top && this.top === -1) this.bottom--;
		return this;
	}

	peek() {
		return this.arr[this.top];
	}
 
}

const myStack = new Stack();

console.log(myStack.peek());
console.log(myStack.push('apple'));
console.log(myStack.push('banana'));
console.log(myStack.push('mango'));
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
