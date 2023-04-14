function test(){
 console.log(sum(0)==0?"Passed":"Failed");
 console.log(sum(2)==3?"Passed":"Failed");
 console.log(sum(4)==10?"Passed":"Failed");
 console.log(sum()=="n is undefined"?"Passed":"Failed");
 console.log(sum("abcdef")=="not a number"?"Passed":"Failed");
 console.log(sum(true) =="not a number"?"Passed":"Failed");


 }
 test ();
 
(function(){
 console.log(sum(0)==0?"Passed":"Failed");
 console.log(sum(2)==3?"Passed":"Failed");
 console.log(sum(4)==10?"Passed":"Failed");
 console.log(sum()=="invalid argument"?"Passed":"Failed");
 })();
 
 console.log("reapelare test");
 test ();
 

 function test1(){
    var result = getFibonacci(2);
    if (result[0] ==1 && result[1] == 1) {
        console.log("test 1 passed");
    }}

    function test2(){
    
    result = getFibonacci(5);
    if (result[0] == 1 && result[1] == 1 && result[2] == 2 && result[3] == 3 && result[4] == 5) {
        console.log("test 2 passed");
    }

}

function test3(){
    
    result = getFibonacci("test");
    if (result === "not a number") {
        console.log("test 3 passed");
    }

}

function test4(){
    result=getFibonacci(11);
    console.log("test 4 passed");
}

test();
test1();
test2();
test3();
test4();
