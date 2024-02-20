


function removeNth (head, n) {
	const dummyHead = {next: head};
	let slow = dummyHead.next;
	let fast = dummyHead.next;

	for(let i = 1; i<=n; i++)
		fast = fast.next;
	
	while(fast.next) {
		fast = fast.next;
		slow = slow.next;
	}

	const temp = slow.next;
	slow = slow.next.next;

	console.log('deleted node : ',temp.data);
	
	return dummyHead.head;
} 

















