const arr = ["I want to", "be a", "professional programmer"];

const newArr = arr.map(str => str+" ").join('').trim().split(' ');

console.log(newArr);