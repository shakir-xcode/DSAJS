
function myReduce(reducerCb,initialValue) {
	if(this.length === 0) return null;
	let accValue;
	let currentIndex = 0;
	if(!initialValue) {
		accValue = this[currentIndex];
		currentIndex++;
	}else {
		accValue = initialValue;
	}	

	
	for(let i=currentIndex; i<this.length; i++) {
		accValue = reducerCb(accValue, this[i]);
	}

	return accValue;
}

Array.prototype.myReduce = myReduce;


const nums =[1,2,3,4,5];

const fact = nums.myReduce((acc, num)=>acc*num,null)

console.log(fact);












