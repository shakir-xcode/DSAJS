const arr = [1,2,3,2,3,4,5];
const occurence = {};
arr.forEach(item => {
    occurence[item] = occurence[item]+1 || 1;
})
for (key in occurence) 
    if (occurence[key] === 1)
        console.log(key)