

function anagrams(s1, s2) {
	if (s1.length !== s2.length) return false;

	for(let i=0; i<s2.length; i++) 
		s1 = s1.replace(s2[i],'')
	
	return s1==='';
}

console.log(anagrams('time', 'emit'))













