class BinaryMaxHeap {
	constructor() {
		this.values = [41, 39, 33];
	}

	insert(item) {
		this.values.push(item);

		let childIndex = this.values.length - 1;

		while (true) {

			let parentIndex = Math.floor((childIndex - 1) / 2);
			if (parentIndex < 0) return this.values;

			if (this.values[childIndex] > this.values[parentIndex]) {
				let temp = this.values[parentIndex];
				this.values[parentIndex] = this.values[childIndex]
				this.values[childIndex] = temp;
			}
			else return this.values;

			childIndex = parentIndex;

		}

	}

	extractMax() {
		const maxItem = this.values[0];
		const end = this.values.pop();
		if (this.values.length === 0) return maxItem;
		this.values[0] = end;
		let pIdx = 0;
		while (true) {
			let lIdx = (pIdx * 2) + 1;
			let rIdx = (pIdx * 2) + 2;
			if (lIdx < this.values.length && rIdx < this.values.length) {
				if (this.values[lIdx] > this.values[rIdx]) {
					if (this.values[pIdx] < this.values[lIdx]) {
						this.swap(pIdx, lIdx)
						pIdx = lIdx;
					}
					else return maxItem;
				} else {
					if (this.values[pIdx] < this.values[rIdx]) {
						this.swap(pIdx, rIdx)
						pIdx = rIdx;
					}
					else return maxItem;
				}
			}
			else if (lIdx < this.values.length) {
				if (this.values[pIdx] < this.values[lIdx]) {
					this.swap(pIdx, lIdx)
					pIdx = lIdx;
				}
				return maxItem;
			}
			else {
				return maxItem;
			}
		}
	}
	swap(idx1, idx2) {
		let temp = this.values[idx1];
		this.values[idx1] = this.values[idx2];
		this.values[idx2] = temp;
	}

	display() { return this.values }
}


const h1 = new BinaryMaxHeap();
// console.log(h1.display())
// console.log(h1.insert(55))
console.log(h1.extractMax())
console.log(h1.extractMax())
console.log(h1.extractMax())
console.log(h1.extractMax())
console.log(h1.extractMax())

console.log(h1.display())
/*console.log(h1.insert(39))
console.log(h1.insert(40))
*/