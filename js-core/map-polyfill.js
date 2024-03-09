function pMap(cb) {
	
	if(typeof cb !== 'function')
		return new Error(`parameter ${cb} is not a fuction`)

	const newArr = [];
	for(let i=0; i<this.length; i++) {
		newArr.push(cb(this[i], i))
	}
	
	return newArr;
}

Array.prototype.pMap = pMap;


console.log([1,2,3].pMap(item => item*item));
console.log([3,4,5].pMap(4));




















