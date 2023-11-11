class Node {
	constructor (value) {
		this.value = value;
		this.next = null;
	}
}


class Stack {
	constructor () {
		this.top = null;
		this.bottom = null;
		this.length = 0;		
	}

	push (item) {	
		const newNode = new Node(item);
		newNode.next = this.top;
		if (this.length === 0)
			this.bottom = newNode;

		this.top = newNode;
		this.length++;
		return this;
	}
	
	pop () {
		if(this.length === 0) return 'stack underflow';	
		if(this.top === this.bottom) this.bottom = null;
		this.top = this.top.next;
		this.length--;
		return this;
	}

	peek () {
		return this.length > 0 ? this.top : 'stack is empty';
	}

}

const myStack = new Stack();
console.log(myStack.peek());
console.log(myStack.push('apple'));
console.log(myStack.push('banana'));
console.log(myStack.pop());
console.log(myStack.pop())
console.log(myStack.pop())




