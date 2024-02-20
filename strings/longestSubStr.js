


function longSubStr(s){

	let charMap = {}
	let maxLength = 0;
	let start = 0;
	let end = 0;

	
	for(let i = 0; i<s.length; i++) {
		if(charMap[s[end]] >= start) {
			start = charMap[s[end]]+1;
		}

		let val = (end-start)+1;
		maxLength = Math.max(val,maxLength);
		charMap[s[end]] = i; 
		end++;
	
	}
	return maxLength;
}

console.log(longSubStr('AABCDFFBF'))










