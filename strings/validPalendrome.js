
function isPalindrome(s) {
	s = s.toLowerCase().replace(/[\W_]/g, "");
	let start=0;
	let end = s.length-1;

	while(start<end) {
		if(s[start] !== s[end])
			return false;
		start++;
		end--;
	}
	return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))

console.log(isPalindrome("race a car"))










