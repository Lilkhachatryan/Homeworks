// 1. 

const removeFirst = (arr = [], i = 0) => {
	if(!Array.isArray(arr)) return "Enter array as argument";

	if(!arr.length) return arr;

	if(i < arr.length -1 ) {
	  arr[i] = arr[i + 1];

	  return removeFirst(arr, i + 1);
    } else {
	  arr.length = i;
	  return arr;
	}
	
}

const removedFirst = removeFirst([1,2,3,4,5]);

// 2.

function concatArrays(arr = []) {

	// [...arr.toString().split(",")]

	flatten = []
	arr.forEach(item => {
		if(Array.isArray(item) && item.length !== 0) {
			flatten.push(...concatArrays(item));
		} else {
			return flatten.push(item);
		}
	})
	
	return flatten;
}



// 3.

function sumOfDigits(number) {
	let sum = number + '';

    while(sum.length > 1) {
       let temp = 0;
       for(let i = 0; i < sum.length; i++) {
           temp += +sum[i];
       }
       sum = temp + '';
    }
	return sum;
}



// 4. 

function objectFlip(obj) {
  const ret = {};
  Object.keys(obj).forEach((key) => {
    ret[obj[key]] = key;
  });
  return ret;
}
