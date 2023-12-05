function freqCount (arr1, arr2) {
	const freq1 = {};
	const freq2 = {};

	arr1.forEach(item => {
		freq1[item] = (freq1[item] || 0)+1;
	})

	arr2.forEach(item => {
		freq2[item] =  (freq2[item] || 0)+1;
	})


	for (let key in freq1) {
		if (!freq2[key ** 2]) return false;
		if (freq2[key ** 2] !== freq1[key]) return false;
	}

	return true;
//	console.log(freq1)
//	console.log(freq2)
}

console.log(freqCount([1,2,3,2,1,2],[1,4,9,4,1,4]))