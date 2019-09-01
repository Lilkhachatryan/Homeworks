// 1. 

const productAdjacents = (arr = []) => {	
	let product = 1;
	arr.map((item, index) => {
		let currentProd = item * arr[index + 1];
		if(product < currentProd) {
			product = currentProd;
		}; 
	});
	return product;
}

productAdjacents([1,2,3,4,5,6]);
productAdjacents([5,6,3,2,7,8]);


// 2.

const countMissedElems = (arr = []) => {
	let count = 0;
	arr.map((item, index) => {
		let dif = arr[index + 1] - item;
		if(dif > 1) {
			count += dif - 1;
		}
	})

	return count;
}

countMissedElems([1,2,5,8,9,10]);


// 3.

const toAcronym = (str = '') => {
	let arrStr = str.split(' ').map(item => item.substring(0,1).toUpperCase());
	return arrStr.join('')
}

toAcronym('Prisoner of War');
toAcronym('Have a good night');


// 4.

const allSubStrings = (str = '', n = 0) => {
	var res = [];

	for(let i = 0, len = str.length; i <= len - n; i++) {
		res.push(str.substring(i, i + n));
	}

	return res;
}

allSubStrings('495215',3);

// 5.


var arr = [
    {parent: null, id: 'a'},
	{parent: 'a', id: 'b'},
	{parent: 'a', id: 'c'},
	{parent: 'a', id: 'd'},
	{parent: 'c', id: 'e'},
	{parent: 'e', id: 'f'},
	{parent: 'o', id: 'h'},
	{parent: 'f', id: 'g'},
	{parent: 'f', id: 'i'},
	{parent: 'h', id: 'j'},
	{parent: 'j', id: 'k'},
	{parent: 'k', id: 'l'},
	{parent: 'd', id: 'm'},
	{parent: 'd', id: 'n'},
	{parent: 'f', id: '0'},
];
tree(arr);

// 6. 

const sortedByPercent = (arr = []) => {
	arr = arr.filter(item => item.readStatus)
    return arr.sort(function(a, b){ return b.percent - a.percent });
}

sortedByPercent([
    {readStatus: true, percent: 40},
	{readStatus: true, percent: 70},
	{readStatus: true, percent: 30},
	{readStatus: false, percent: 50},
])