
class Node {
	constructor(value) {
		this.data = value;
		this.next = null;
	}
}

class LinkedList {
	constructor (value) {
		this.head = new Node(value);
		this.tail = this.head;
	} 

	prepend (item) {
		const node = new Node(item);
		node.next = this.head;
		this.head = node;
	} 

	append (item) {
		const node = new Node(item);
		this.tail.next = node;
		this.tail = node;
	}


	insert(index, item) {
		if(index === 0) {
			this.prepend(item)
		return JSON.stringify(this, null,2);
		}

		const node = new Node(item);
		let i = 1;
		let ptr = this.head;
		
		while(i++ < index){
			if(ptr.next === null) {
				this.append(item)
				return;		
			}
			ptr = ptr.next;
		}
		node.next = ptr.next;
		ptr.next = node;

		//return JSON.stringify(this, null,2);
	}
	
	display() {
		return JSON.stringify(this, null,2);
	}

	reverse() {
		let ptr = this.head;
		while(ptr !== null) {
			
		}	
	}
}



const myList = new LinkedList(2);
myList.append(3);
myList.append(4);
myList.append(5);
myList.append(6);
myList.append(7);


console.log(myList.insert(55, 30))

console.log(myList.display())







