
const compare = (str, subStr, i) => {
	for(let j=0; j<subStr.length; j++) {
		if(subStr[j] !== str[i+j])
			return false;
		}
	return true;
}



const subStrCount = (str, subStr) => {
	if (!subStr.length || !str.length) return 0;

	let count = 0;

	for(let i=0; i<str.length-subStr.length+1; i++) {
		if(compare(str, subStr, i))
			count++;
	}

	return count;
}

console.log(subStrCount("this is a sentence", "is"));











