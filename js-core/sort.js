
const arr = [4,6,2,7,5,1,0];
arr.sort((a,b) => a-b);
console.log('sorted: ',arr)
arr.reverse();
console.log('reversed: ',arr)

const myArr = [4,6,2,7,5,1,0];
const sortedArr = myArr.toSorted((a,b) => a-b);
console.log('sorted: ',sortedArr)
const revArr = sortedArr.toReversed();
console.log('reversed: ',revArr)














