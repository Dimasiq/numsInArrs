let notEven = function(b) {
	let arr = [];
	console.time('test');
	for(let i=0; i<=b; i++){
		if(i % 2==0 && i % 3!==0) {
			arr.push(i);
	 }
 }
 console.timeEnd('test');
 return arr;
}


let notEven1 = function(b) {
	let arr = [];
	console.time('test');
	for(let i=0; i<=b; i+=2){
		if(i % 2 == 0 && i % 3!==0) {
			arr.push(i);
	 } 
 }
 console.timeEnd('test');
 return arr;
}

let notEven2 = function(maxNum, minNum, exNum) {
	let arr = [];
	console.time('test');
	for(let i=0; i<=maxNum; i+=minNum){
		if(i % minNum==0 && i % exNum !==0) {
			arr.push(i);
	 }
 }
 console.timeEnd('test');
 return arr;
}
