const nestedArray = [1, [2, 3], 4, [5, [6, 7]]];


const flatten = list => {
	return list.reduce((acc, val)=>{
		if(typeof val !== "number") {
			acc.push(...flatten(val));
		} else
			acc.push(val);
		return acc;
	},[])
}


console.log(flatten(nestedArray));