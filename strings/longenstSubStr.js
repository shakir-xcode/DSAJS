
const longestSubStr = str => {
	let maxCount = 0;
	let start = 0;
	const chars = {};

	for (let end=0; end<str.length; end++) {
		if (chars.hasOwnProperty([str[end]])) {
			start = chars[str[end]] + 1;
			chars[str[end]] = end;
		}
		
		chars[str[end]] = end;
		if(maxCount < end-start) 
			maxCount = end-start;
	}

	return maxCount;
}

console.log(longestSubStr('pwwkew'))











