var counter = 0;

 function printValue(divId, value){
 document.getElementById(divId).innerHTML = value;
 }
	printValue("counter", 0);

 	
	document.getElementById("inc").addEventListener("click",increment);
function increment(){
	if(counter < 10)
	counter++;
	else alert("ai ajuns la 10");
	printValue("counter", counter);
}

	document.getElementById("dec").addEventListener("click", decrement);
function decrement(){
	if(counter>0)
	counter--;
	else alert("ai ajuns la 0");

	printValue("counter", counter);
}