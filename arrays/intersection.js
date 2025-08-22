function common(arr1, arr2) 
{
  const set2 = new Set(arr2); 
  return arr1.filter(value => set2.has(value));
}

const arr1 = [4,6,7];
const arr2 = [6,7,8]

console.log(common(arr1, arr2));
