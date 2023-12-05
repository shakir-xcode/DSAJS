//"aaz" , "aza" = true
//"man", "aanm" = false

// {a: 2, z: 1}, 

function checkAnagram (str1, str2) {
	if(str1.length !== str2.length) return false;

	const freqCount = {};
	for(let i=0; i<str1.length; i++) {
		let ch = str1[i]
		freqCount[ch] = (freqCount[ch] || 0) + 1;
	}

	for(let i=0; i<str2.length; i++) {
		let ch = str2[i]
	
		if(!freqCount[ch]) return false;		

		freqCount[ch]-=1;
		
	}

	return true;
	
} 


console.log(checkAnagram('cinema', 'iceman'));








