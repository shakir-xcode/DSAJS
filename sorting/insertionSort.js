const inSort = arr => {
	const length = arr.length;

	for(let i = 0; i<length-1; i++) {
		let j = i+1;
		while((j-1) >= 0) {
			if(arr[j] < arr[j-1]) {
				let temp = arr[j];
				arr[j] = arr[j-1];
				arr[j-1] = temp;
				
			} else break;
			
			j--;
		}		
	}
	return arr;
}

console.log(inSort([0,2,6,5,9,4]))









