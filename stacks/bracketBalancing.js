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


const balanceBrackets = (str) => {
	if(str.length === 0) 
		return true;

	const b1 = '[';

	const s1 = new Stack();

	for(let i=0; i<str.length; i++) {
		const top = s1.peek();
		const currentItem = str[i];

		if(s1.isEmpty()) {
			s1.push(currentItem);
			continue;
		}

		switch(top) {
			case '[':
				currentItem === ']'? s1.pop() : s1.push(currentItem);
				break;

			case '{':
				currentItem === '}'? s1.pop() : s1.push(currentItem);
				break;

		
			case '(':
				currentItem === ')'? s1.pop() : s1.push(currentItem);
				break;
		}
	}

	return s1.isEmpty();
}

const b1 = '()';
const b2 = '[(})]';
const b3 = '{[()]}';
const b4 = '([{{[(())]}}])}';

console.log(balanceBrackets(b4))















