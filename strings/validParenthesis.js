

function validParenthesis(s) {
	const bracket = {
		'(': ')',
		'[': ']',
		'{': '}',
	}

	const stack =[];

	for (let i = 0; i<s.length; i++){
		let top = stack[stack.length-1]
		if(bracket[top] === s[i])
			stack.pop();
		else stack.push(s[i])	
	}
	return stack.length===0;
}

console.log(validParenthesis('{]'))












