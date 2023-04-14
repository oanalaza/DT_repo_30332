document.getElementById("n").addEventListener('input',inputSum );

 function inputSum(){
	var inputNumber = parseInt(document.getElementById("n").value );
	sum( inputNumber );
	getFibonacci(inputNumber);

}

 function sum(n){
	if (typeof n === 'undefined') return "n is undefined ";
	var sum = 0;
	if(typeof n !== 'number') return "not a number";

	for(var i=1;i<=n;i++){
		sum+=i;
	}
	return sum;
 }

 function getFibonacci(n){
    if(typeof n === 'undefined') return "n is undefined";
    if(typeof n !== 'number') return "not a number";
    if(n < 0 || n > 10) return "Not allowed, n is out of range (0-10)";

    var sequence = [1,1];
    for(var i=2;i<n;i++){
        sequence[i] = sequence[i-1] + sequence[i-2];
    }
    return sequence;
}
console.log(getFibonacci(5));




 

