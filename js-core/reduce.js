// multiply all elements

const multiply = arr => arr.reduce((acc, num) => acc*num)



// Max element

const maxElement = arr => arr.reduce((acc, num) => num>acc? num : acc )

// Min element

const minElement = arr => arr.reduce((acc, num) => num<acc? num : acc )


//Grouping Objects by a specific property.
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Alice', age: 20 }
];

const groupPersons = arr => {
	return arr.reduce((acc, obj) => {

	//acc[obj.name] ? acc[obj.name].push({...obj}) : (acc[obj.name] = [{...obj}])	

	(acc[obj.name] || (acc[obj.name] = [])).push({...obj})	

	return acc;
	},{})
}


// Flatten a 2d array

const myArray = [[2,4,5], [1,8,9], [6,3,7]];

const flatten = bigArr => bigArr.reduce((acc, arr) => [...acc, ...arr],[])


// item count

const myArray2 = [3,5,3,6,7,5,6,8,9,3];

const itemCount = arr => {
	return arr.reduce((acc, item) => {
		//(acc[item] ? acc[item] += 1 : acc[item] = 1)	
		acc[item] = (acc[item] || 0) + 1;
		return acc;
	}, {})
}

// Filtering and Mapping
const filteredAndMapped = arr => {
	return arr.reduce((acc, num) => {
		if(num % 2 === 0) 
			acc.push(num*2);
		return acc;
	}, [])

}
console.log(filteredAndMapped(myArray2))













