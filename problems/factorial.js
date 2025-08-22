const factIter = n => {
	if (n < 0) return null;
	if (n <= 1) return 1;
	
	let fact = 1;
	for (let i=2; i<=n; i++) {
		fact = fact*i;
	}
	return fact;
}

const factorial = n => {
	if (n < 0) return null;
	if (n <= 1) return 1;
	
	return factorial(n-1) * n;
}

console.log(factorial(-1))
console.log(factorial(-2))
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))











