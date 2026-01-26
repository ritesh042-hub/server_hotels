function callback(){
    console.log("The method is callback")
}

var add=function (a,b,callback){
    var x = a+b;
    console.log(x)
    callback()
}

add(8,9,callback);
