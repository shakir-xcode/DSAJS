
const curry = function (fn) {
	const argsCount = fn.length;

	return function f1 (...args) {
		if(args.length >= argsCount) 
			return fn(...args);

		return function f2 (...moreArgs) {
			const newArgs = [...args, ...moreArgs];
			return f1 (...newArgs);
		}
	}
} 

const curriedSum = curry((a,b,c) => a+b+c);
console.log(curriedSum(2,3,5));
console.log(curriedSum(2)(3,5));
console.log(curriedSum(2)(3)(5));












