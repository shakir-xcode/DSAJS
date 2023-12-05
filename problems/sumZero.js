function sumZero (arr) {	
	if (!arr.length) return null;

	let start = 0;
	let end = arr.length-1;

	while(start < end) {
		if((arr[start]+arr[end]) === 0) 
			return [arr[start], arr[end]];
		if((arr[start]+arr[end]) > 0) end--;
		else start++;
	}

	return null;
}

console.log(sumZero([-2,-1,0,1,3,4,5]))






