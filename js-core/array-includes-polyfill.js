
Array.prototype.pIncludes = function (element) {
	
	for (let i=0; i<this.length; i++) {
		if(this[i] === element) return true;
	}
	return false;
}

console.log([2,4,6,1].pIncludes(1));
console.log([2,4,6,1].pIncludes(0));












