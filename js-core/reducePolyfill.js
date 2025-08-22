const arr = [2,5,1]

Array.prototype.pReduce = function (cb, initialValue) {
	if (initialValue === undefined && this.length === 0)
		return new Error(this, " is empty")
		
	let startIndex = 0;
	if(initialValue === undefined) {
		initialValue = this[0];
		startIndex = 1;
	}

	let acc = initialValue;
	for (let index=startIndex; index<this.length; index++) {
		acc = cb(acc, this[index], index, this);
	}
	
	return acc;
}

const newSum = arr.pReduce((acc, currentValue)=>{
	return acc + currentValue;	
},0)

console.log(newSum);