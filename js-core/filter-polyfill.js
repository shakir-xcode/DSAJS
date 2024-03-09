
Array.prototype.pFilter = function (cb) {
	if(typeof cb !== 'function')
		return new Error(`${cb} is not a function`)

	const newArr = [];

	for(let i=0; i<this.length; i++) {
		cb(this[i], i)? newArr.push(this[i]) : "";
	}
	
	return newArr;
}

console.log([1,2,3,4,5,6].pFilter(item => item%2===0));
console.log([1,2,3,4,5,6].pFilter(543));














