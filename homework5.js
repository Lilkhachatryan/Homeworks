// 1. 
// need to finish
function numberToWord(number = 0) {
	if( number === 0 ) {
		return 'zero';
	}
	let strOfNumber = number.toString();

	let units = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 						'seventeen', 'eighteen', 'nineteen' ];

	let tens = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];

	let scales = [ '', 'thousand', 'million'];

	let start = strOfNumber.length;
	chunks = [];

	while(start > 0) {
		var end = start;
		chunks.push(strOfNumber.slice(start - 3 , start));
		start = start -3;		
	}

	words = [];
	chunks.map((chunk, i) => {
		chunk = parseInt(chunk);
		
		chunk.split( '' ).reverse(); //.map( parseFloat );
		
		
		
	})
}


// 2.

const possibleSubsets = (arr = []) => {
	let res = [];
	for(let i = 0; i < arr.length; i++) {
		for(let j = i + 1; j < arr.length; j++) {
			for(let k = j + 1; k < arr.length; k++) {
				res.push([arr[i], arr[j], arr[k]]);
			}
		}
	}
	return res;
}

possibleSubsets([5,9,23,0,-2,-1]);

// 3. 

const possibleAnagrams = (str = '', arr = []) => {
	/**
	 * Time ~ 0.145ms
	 */
	let matched = [];
	let sortedStr = [...str].sort();
	console.time()
	arr.map(item => { 
		let sortedItem = [...item].sort();
		if(sortedStr.join('').toLowerCase() === sortedItem.join('').toLowerCase()) {
			matched.push(item);
			return ;
		}
	})
	console.timeEnd()
	return matched;
}

const possibleAnagrams2 = (str = '', arr = []) => {
	/**
	 * Time ~ 0.542ms
	 */
	let matched = [];
	arr.map(item => { 
		var reg_exp = new RegExp('[' + str + ']', 'gi');
		var res = item.match(reg_exp);	
		if(str.length == res.length) {
			matched.push(item);
			return ;
		}
	})
	return matched;
}

possibleAnagrams('listen', ['enlists', 'google', 'inlets', 'banana']);
possibleAnagrams('listen', ['enlists', 'google', 'inlets', 'banana', 'nitsle']);


// 4

const productOfArrayItems = (arr = []) => {
	let p = 1;
	let is_negative = false;

	if(!(arr.every(item => Array.isArray(item)))) return 'Invalid Argument';

	arr.map(item => {		
		let max = Math.max(...item.filter(x => x < 0));
		if(max !== -Infinity) {
			is_negative = true;
			p *= max;
		} 
	});
	return !is_negative ? 'No negatives' : p;
}

productOfArrayItems([[2,-9,-3,0],[1,2],[-4,-11,0]]);

