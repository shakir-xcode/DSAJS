const factRecur = num => {
	if(num === 1 || num === 0) return 1;

	return num*factRecur(num-1);
}

console.log(factRecur(4));