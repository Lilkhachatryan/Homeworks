// 1.

const productOfArrayItems = (arr = []) => {
	let p = 1;
	let is_negative = false;
	let is_array = true;

	arr.map(item => {
		if(!Array.isArray(item)) { 
			is_array = false;

			return 
		}
		
		let max = Math.max(...item.filter(x => x < 0));
		if(max !== -Infinity) {
			is_negative = true;
			p *= max;
		} 
	});
	return !is_array ? 'Invalid Argument' : is_negative ? p : 'No negatives';
}

productOfArrayItems([1, 2, 3]);
productOfArrayItems([[3, 4], [11, 0], [5, 6, 7, 8]]);
productOfArrayItems([[2, -9, -3, 0], [1, 2], [-4 , -11, 0]]);

// 2.


const countOfTypes = (arr = []) => {
	/**
	 * Time ~ 0.110108ms
	 */
	// const countOfTypesObj = {
	// 	Numbers: 0,
	// 	Strings: 0,
	// }

	// arr.map(item => typeof item === 'number' ? countOfTypesObj.Numbers++ : countOfTypesObj.Numbers++);

	// return countOfTypesObj;


	/**
	 * Time ~ 0.074ms
	 */

	let numbers = 0;
	let strings = 0;

	arr.map(item => typeof item === 'number' ? numbers++ : strings++);

	return {
		Numbers: numbers,
		Strings: strings,
	}
}

countOfTypes([1, '10', 'hi', 2, 3]);
countOfTypes([1, 4, 'i am a string', '456']);

// 3. 

const countSumOfArrays = (arr = []) => {
	return arr.map(item => {																								
		if(!Array.isArray(item)) {
			return item;
		}
		return item.reduce((sum, i) => (sum + i), 0);
	})
}

countSumOfArrays([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]);
countSumOfArrays([[ 8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0, -1]]);
countSumOfArrays([[1], [2], [3], [4]]);


// 4.

const filterArray = (arr = []) => {
	if(arr.length === 0) return [];
 
	let oddArr = arr.filter(item => item % 2 !== 0 );

	let oddLength = oddArr.length;

	return oddLength === 0 ? [] : oddArr.map(item => item * oddLength);
}

// 5. 

const removeDuplicates = ( arr = []) => {
	return arr.filter( (item, index) => {
		if(arr.indexOf(item, index + 1) === -1) {
			return true
		}
		return false
	})
}

removeDuplicates([1, 2, 3, 3, 2, 2,5])


// 6. 

const productneighbours = (arr = []) => {
	const arrLength = arr.length;

	let newArr = [];

	for(let index = 0; index < arrLength - 1 ; index++) {
		newArr.push(index === arrLength - 1 ? arr[index + 1] : arr[index] * arr[index + 1]);
	}
	return newArr;
}

productneighbours([3, 7, 12, 5, 20, 0]);



