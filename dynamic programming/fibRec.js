const memo = Array.from({ length: 100 }, () => -1);


const fib = (n) => {
	if (n === 1) return 0;
	if (n === 2) return 1;

	if (memo[n] !== -1) return memo[n];

	const fibTerm = fib(n-1)+fib(n-2);
	memo[n] = fibTerm;

	return fibTerm;
}

const calculateFib = range => {

	const fibSeq = [];
	if (range < 1) return null;

	for(let i = 1; i<=range ; i++)
		fibSeq.push(fib(i));

	return fibSeq;
}

console.log(JSON.stringify(calculateFib(50), null, 2))














