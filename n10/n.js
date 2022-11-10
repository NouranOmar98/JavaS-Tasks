// let x=prompt("Entern1");
// let y=prompt("Entern2");

// if (x>y){
//     document.write("Hello")
// }
// else{
//     document.write("Goodbuy")
// }

// let n1=prompt("Entern1")
// let n2=prompt("Entern2")
// let n3=prompt("Entern3")

// if (n1*n2*n3>0){
//     document.write ("Positive") 
// }
// else {
//     document.write ("Negative")
// }

let a=+prompt("Entern1")
let b=+prompt("Entern2")
let c=+prompt("Entern3")

// var max=a;
if (a>b&&b>c ){
    document.write(a+" "+ b+" "+ c)
}
else if(b>a&&a>c)
{
    document.write(b+" "+ a+" "+ c)
}
else if(c>b&&b>a){
    document.write(c+" "+ b+" "+ a)
}
else if(b>c&&c>a){
    document.write(b+" "+ c+" "+ a)
}
else if(a>c&&c>b){
    document.write(a+" "+ c+" "+ b)
}
else{
    document.write(c+" "+ a+" "+ b)
}

////

