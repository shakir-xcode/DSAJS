function longestPalendrome(s) {
	let longPal = '';
	let mid;
	let right;
	let left;
	if(s.length%2===0) {
		right = s.length/2;
		left = right-1;
	} else{
		mid = Math.floor(s.length/2);
		left = mid-1;
		right = mid+1;
		longPal = s[mid];
	}

	while(left>=0)  {
		if(s[left] !== s[right]) 
			break;
		longPal = `${s[left]}${longPal}${s[right]}`
		left--;
		right++;
	}

	return longPal;
}
console.log('abcba : ',longestPalendrome('abcba'));
console.log('bbbb : ',longestPalendrome('bbbb'));
console.log('aa : ',longestPalendrome('aa'));
console.log('aba : ',longestPalendrome('aba'));
console.log('a : ',longestPalendrome('a'));







	