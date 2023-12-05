function fibOp(n, list = [0,1]) {
	if(n < 2) return n;

	if(list[n]) return list[n]	

	let item = fibOp(n-1, list)+fibOp(n-2, list);
	list[n] = item;

	return item;
}

function fib(n) {
	if(n < 2) return n;

	return fib(n-1)+fib(n-2);
}


//console.log(fib(43))

console.log(fibOp(10))
