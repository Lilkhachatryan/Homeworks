// 1. Write a function which receives an array and a number as arguments and returns a new array
// from the elements of the given array which are larger than the given number.

function filterArray(arr = [], n) {
	if(!n) {
		return "Enter number";
	}

	let filtered = [];

	// shorter method
	// filtered = arr.filter( item => item > n)

	for(let i=0; i<arr.length; i++) {
		if(arr[i] > n) {
			filtered.push(arr[i]);
		}
	}

	return filtered.length !== 0 ? filtered : "Such values don't exist";
}

const filteredArray = filterArray([10, 25, 16, -5, 4, 48, 78], 16);
console.log(filteredArray);


// 2. Write a function, which receives two numbers as arguments and finds all numbers between
// them such that each digit of the number is even. The numbers obtained should be printed in a
// comma-separated sequence on a single line.

function findEven(start = 0, end = 0) {
	if(start>end) {
		return "First argument can't be greater"
	}

	let evenNumbers = [];

	for(let i = start; i <= end; i++) {
		let current = [...i.toString()];
		let isEven = true;

		for(let j =0; j<current.length; j++) {
			if(current[j] % 2!== 0){
				isEven = false;
			} 
		}

		if(isEven) {
			evenNumbers.push(i);
		}
	}
	return evenNumbers.join(', ');
}

const findedEven = findEven(19,42);
console.log(findedEven);



// 3. Write a recursive function to determine whether all digits of the number are odd or not.

function isOddDigitsOfNumber(number) {
	if(!number) {
		return "Enter argument"
	}
	if(!Array.isArray(number)) {
		number = [...number.toString()];
	}

	if(number.length === 0) {
		return true;
	}

	if(number.shift() % 2 === 0) {
		return false;
	} else {
		isOddDigitsOfNumber(number);
	}
}

const res = isOddDigitsOfNumber(7791);
console.log(res)



// 4. Given an array of numbers. Write a recursive function to find its minimal positive element. (if such
// element does not exist, return -1)․

function minOfArray(arr = [], n = Infinity) {
	if(arr.length === 0) {
		return n !== Infinity ? n : -1
	}

	let current = arr.shift();

	return minOfArray(arr, (current <= n && current > 0) ? current : n);
}

const minElem = minOfArray([8,7,-3]);
console.log(minElem);




//  5. Given an array of numbers which is almost sorted in ascending order.  Find the index where sorting
//  order is violated.

function findViolatedIndex(arr = []) {
	for(let i = 0; i < arr.length -1 ; i++) {
		if(arr[i] > arr[i + 1]) {
			return i+1;
		}
	}
	return -1;
}

let violatedIndex = findViolatedIndex([2, 12, 25, 5, 48]);
console.log(violatedIndex);