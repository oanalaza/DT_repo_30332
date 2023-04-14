//mesaj afisat in consola:
console.log(" Hello from JavaScript from Oana ! ");

//mesaj afisat in pagina html
document.getElementById("message").innerHTML="Message from JavaScript from Oana";

//definire de variabile
var sum = 10;
var name = "Alexandru";
var isActive = true ;
var user = {id: 1, name :"Andrei", age: 21, };

var user = {
 "id": 1,
 "name": " Alexandru Cristea",
 "username": "acristea ",
 "email": " acristea@test.com ",
 "address": {
 "street": "Padin",
 "number": "Ap. 10",
 "city": "Cluj - Napoca",
 "zipcode": "415200",
 "geo": {
 "lat": "46.783364",
 "lng": "23.546472"
 }
 },
 "phone": "004-07xx-123456",
 "company": {
 "name": "XYZ",
 "domain": "Air Traffic Management",
 "cities": ["Cluj - Napoca ", " Vienna ", " Paris "]
}
}

//afisarea caracteristicilor obiectului "user":
console.log(user.name);
console.log(user.address.geo.lat);
console.log(user.company.name);
console.dir(user.company.cities);
console.log(user.company.cities[0]);
console.log(user.address.zipcode);

//apelarea unei functii in js
function print(message){
 console.log(message);
 }
 print("hello");
 
 //operatorul ternar
 var password="123456";
 console.log(password=="123456"?"ALLOW":"DENY");
 
 // exemplu "if"
 var password="123456";
 if(password=="123456"){
 console.log("permission accepted");
 } else {
	console.log("permission accepted");
 }

 //functia if cu zipcode
 var zipcode="415200";
 if(zipcode=="415200"){
 console.log("locuieste in Beius");
 } else {
	console.log("strain!");
 }

  //operatorul ternar pentru zipcode
  var zipcode="415200";
  console.log(zipcode=="415200"?"Beius":"!Beius");

 

