document.getElementById("add").addEventListener('click',add);
document.getElementById("sub").addEventListener('click',sub);
document.getElementById("mul").addEventListener('click',mul);
document.getElementById("div").addEventListener('click',div);

function add(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = a+b;
    document.getElementById("c").value = c;
}

function sub(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = a-b;
    document.getElementById("c").value() = c;
}

function mul(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = a*b;
    document.getElementById("c").value = c;
}

function div(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = a/b;
    document.getElementById("c").value = c;
}
