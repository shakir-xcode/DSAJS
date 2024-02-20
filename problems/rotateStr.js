const rotateStr = (str, goal) => {
	const startChar = str[0];
	let index = goal.indexOf(startChar);	// O(N)
	let goalLen = goal.length;
	for (let i = 0; i<str.length; i++){	//O(N)
		if(str[i] !== goal[index%goalLen])
			return false;
		index++;
	}	

	if(goal[index%goalLen] !== startChar)
		return false;

	return true;
}

console.log(rotateStr('abcde', 'abced'));











