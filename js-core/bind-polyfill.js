
function greet (greetings, msg, another) {
	console.log(this.name+" from "+this.country+" says, "+greetings+", "+msg+another);
}

const person = {name: 'john', country: 'india'};

Function.prototype.pBind = function (thisArg, ...args) {
	const obj = this;
	return function(...args2){
		obj.apply(thisArg, [...args, ...args2])
	}
}

const jGreet2 = greet.pBind(person,'hello');
jGreet2('you are welcome', ' another');











