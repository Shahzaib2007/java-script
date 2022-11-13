
// for (var i = 0; i <10; i++) {
//     console.log("200 x "+ (i+1) + " = " +200*(i+1));
//  }
 var a = ["a","b","c","d","e"];
 var b ="c"
for(i=0; i<a.length; i++){
    console.log(a[i]);
    if(b == a[i]){
        alert("word found")
    }
};

a = ["a","b","c","d","e"];
var b ="e"
var d = a.indexOf ("f")
if(a === -1){
    console.log("not found")
}else{
    alert("found")
}
var a = ["a","b","c","d","e"];
var b ="b"
var wordfound = false;
for(var i = 0; i < a.lenght; i++){
    if(b == a[i]){
        wordfound = true;
    }
}
var a = ["a","b","c","d","e"];
var b =[1,2,3,4,5];
for(var i = 0; i < a.lenght;i++){
    for(var j = 0; j <a.lenght; j++){
        console.log(a[i],b[j]);
    }
}