
function freqCount(nums, squares) {
	if(nums.length !== squares.length) return false;

	for(let i = 0; i < nums.length; i++) {
		let found = false;
		for (let j = 0; j < squares.length; j++) {
			if(squares[j] === nums[i]*nums[i]) {
				squares[j] = 0-(squares[j]);
				found = true;
				break;
			}
		}
		if (!found) return false;
	}	

	return true;
}

console.log(freqCount([3,3,2], [9,9,16,4]));






