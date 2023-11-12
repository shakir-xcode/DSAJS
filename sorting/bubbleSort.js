const bubbleSort = arr => {
	const length = arr.length;
	for(let i = 0; i<length-1; i++) {
		for(let j = 0; j<length-1; j++) {
			if(arr[j] > arr[j+1]) {
				let temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}			
	}
	return arr;
}

console.log(bubbleSort([7,34,1,9,2,0,8,5,9]))




