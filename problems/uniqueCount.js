function uniqueCount(arr) {
	let temp = null;
	let count = 0;
	for (let i = 0; i<arr.length; i++){
		if(arr[i] === temp) continue;
		temp = arr[i];
		count++;
	}

	return count;
}


function uniqueCountV2 (arr) {	
	if(!arr.length) return 0;
	let i = 0;
	for(let j = 1; j<arr.length; j++) {
		if(arr[i] !== arr[j]) {
			arr[++i] = arr[j];
		}
	}
	return i+1;
}
console.log(uniqueCountV2([0,1,1,1,2,3]));


