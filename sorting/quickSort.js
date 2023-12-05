const partition = (l, h, arr) => {
	//console.log(arr)
	let pivot = arr[l];
	let i = l;
	let j = h;

	while(i < j) {
	do {i++}
	while(arr[i] < pivot)
	do {j--}
	while(arr[j] > pivot)

	if (i < j) {
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	}
	arr[l] = arr[j];
	arr[j] = pivot;
	return j;
}


const quickSort = (arr) => {
	let l = 0;
	let h = arr.length;

	(function quickRecur (l, h) {
		if (l < h) {	
			console.log(l+" : "+h)
			const j = partition(l,h,arr);
			quickRecur(l,j);
			quickRecur(j+1,h);
		}
	})(l,h)
}

const arr = [5,1,0,6,4,8,7,3,9];
quickSort(arr)
console.log(arr);