const items = [2,4,1,6,2,4,8,1,9,0,3,3,4];

const res = {};

items.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, res);

console.log(res);