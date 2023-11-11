class Stack {
	constructor() {
		this.arr = [];
		this.top = -1;	
	}

	
	push(item) {
		this.arr[++this.top] = item;
		return this.arr;
	}

	pop() {
		if(this.top === -1) return 'stack underflow';
		this.arr.length--;
		this.top--;
		return this.arr;
	}

	peek() {
		return this.top === -1? 'empty stack' : this.arr[this.top];
	}
}

const s1 = new Stack();
console.log(s1.push('apple'));
console.log(s1.push('banana'));
console.log(s1.push('coffee'));
console.log(s1.push('drink'));


console.log(s1.pop());
console.log(s1.pop());

console.log(s1.peek());

console.log(s1.pop());
console.log(s1.pop());
console.log(s1.pop());
