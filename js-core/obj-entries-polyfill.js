
Object.pEntries = function (obj) {
	const arr = [];
	for(const key in obj) {
		if(obj.hasOwnProperty(key))
			arr.push([key, obj[key]]);
	}

	return arr;
}

const o1 = {0: 'a', 1: 'b', 2: 'c'};
console.log(Object.pEntries(o1));

















