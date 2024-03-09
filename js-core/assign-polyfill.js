let o1 = {name: 'john'}
let o2 = {age: 65}
let v1 = 34;
let v2 = 'abd';
let ox = {}

Object.pAssign = function (target, ...sources) {
	
	sources.forEach(source => {
		for(const key in source) {
			if (source.hasOwnProperty(key))
			target[key] = source[key];
		}
	})
	return target;
}


Object.pAssign(ox, o1, v1, v2, o2, {address: 'india'});
console.log(ox)

















