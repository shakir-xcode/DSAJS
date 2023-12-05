let newArr = [];
const arr = [4,1,9,6,0];

const merge = (l,mid,h) => {
	let i = l;
	let j = h;
	let m = mid;
	
	while(i<mid && m<h) {
		if(arr[m] > arr[i]) 
			newArr.push(arr[i++]);
		
		else 
			newArr.push(arr[m++]);
	}
		
	while(i < mid) 	
		newArr.push(arr[i++])

	
	while(m < h) 
		newArr.push(arr[m++])
	
}
const mergeSort = (l,h) => {
	if(l < h) {
		let mid = parseInt((l+h)/2);
		mergeSort(l,mid);
		mergeSort(mid+1,h);
		merge(l,mid,h);
	}
}

mergeSort(0,arr.length)
console.log(newArr);

