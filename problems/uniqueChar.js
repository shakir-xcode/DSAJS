function uniqueSeq(str) {
	
	let max = -Infinity;
	let count;
	let freq = {};
	for(let j=0; j<str.length-1; j++) {
		freq = {};
		count = 0;
		for(let i=j+1; i<str.length; i++) {
			if(freq[str[i]]) break;
			freq[str[i]] = "";
			count++;
		}
		console.log(freq,count)
		if (count > max) max = count;

	}
	return [count, freq];
}

console.log(uniqueSeq('hello'))







