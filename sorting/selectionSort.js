const sort = arr => {
	let length = arr.length;

	for (let i = 0; i<length-1; i++) {
		let smallIndex = i;
		for(let j = i+1; j<length; j++) {
			if(arr[j] < arr[smallIndex])
				smallIndex = j;
		}
		if (!(smallIndex === i)) {
			let temp = arr[smallIndex];
			arr[smallIndex] = arr[i];
			arr[i] = temp;
		}
	}
	
	return arr;
}

console.log(sort([2,7,1,9,0,3,6,5]))






