
const findRecItem = arr => {
	const seenItems = {};
	for(let i=0; i < arr.length; i++) {
		if(!(seenItems[arr[i]] === arr[i])) 
			seenItems[arr[i]] = arr[i];	
		else 
			return arr[i];
	}
	return null;
}

console.log(findRecItem([2,5,1,2,3,1,2,4]))
console.log(findRecItem([2,1,1,2,3,5,1,2,4]))
console.log(findRecItem([2,5,1,4,4]))







