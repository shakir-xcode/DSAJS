const nestedArray = [1, [2, 3], 4, [5, [6, 7]]];

/*
const flatten = list => {
	return list.reduce((acc, val)=>{
		if(typeof val !== "number") {
			acc.push(...flatten(val));
		} else
			acc.push(val);
		return acc;
	},[])
}
*/


const flatten = list => {
	return list.reduce((acc, val) => {
		return acc.concat( Array.isArray(val)? flatten(val) : val)
	},[])
}


console.log(flatten(nestedArray));

// ------------------------ Another version
function flattenArray(arr) {
    const newArr = [];

    // Your implementation
    arr.forEach(item => {
        if (item instanceof Array) {
            newArr.push(...flattenArray(item))
        } else newArr.push(item);
    })
    return [...newArr];
}

//For the purpose of user debugging.
flattenArray([1, [2, [3, 4], 5], 6]);