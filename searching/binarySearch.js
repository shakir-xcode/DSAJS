const binSearchRecur = (arr, key) => {
	let l = 0;
	let h = arr.length-1;
	let index = -1;
	(function search(l,h) {
		let mid = parseInt((l+h)/2);

		if (arr[mid] === key) {
			index = mid;
			return mid;
		}
		if (l >= h) return;
		if (key < arr[mid]) 
			search(l,mid);
		else 
			search(mid+1, h);	
	})(l,h)
		
	return index;
}

console.log(binSearchRecur([0,1,2,3,4,5,6,7,8,9], 2));


