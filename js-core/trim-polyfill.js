let str = 'john doe';
let str1 = ' john doe';
let str2 = 'john doe ';
let str3 = '   john doe ';

String.prototype.pTrim = function () {
	let start = 0;
	let end = this.length-1;
	while(this[start] === ' ' || this[end] === ' ') {
		if(this[start] === ' ') start++;
		if(this[end] === ' ') end--;
	}
	return this.slice(start, end+1);
}

console.log(str.pTrim())
console.log(str1.pTrim())
console.log(str2.pTrim())
console.log(str3.pTrim())














