const memoizedSum = () => {
	let cache = {};
	
	return function (n) {	
		if (cache[n]) {
			console.log('Cached value: ',cache[n]);
			return cache[n];
		}
	
		const result = n+10;
		cache[n] = result;
		console.log('Calculated value: ',result);
		return result;
	}
}


const addTen = memoizedSum();

addTen(2);
addTen(7);
addTen(21);
addTen(56);
addTen(7);
addTen(56);














