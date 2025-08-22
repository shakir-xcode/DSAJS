const fib = range => {
	const fibSeq = [1,1];
	if (range < 1) return [];
	if (range === 1) return [1];
	if (range === 2) return fibSeq;

	let first = 1;
	let second = 1;
	let third = 0;
	for(let i=3; i<=range; i++) {
		third = first+second;
		fibSeq.push(third);
		first = second;
		second = third;	
	}

	return fibSeq;
}

console.log(fib(4));








