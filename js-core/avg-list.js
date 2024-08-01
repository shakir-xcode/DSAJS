const list = [2,3,6,1,9]

const findAvg = list => list.reduce((acc, val)=> acc+val)/list.length;


console.log(findAvg(list))