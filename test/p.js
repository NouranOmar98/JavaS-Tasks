let x=[1,2,3,4,5,6];
document.write(x.length);
document.write("<br>");
for(let q=0; q<x.length; q++)
{
    document.write(x[q]);
    document.write("<br>");
}
/////////////////////////////
x.push(7)
document.write("<br>");
document.write(x.pop());
document.write("<br>");
document.write(x)
///////////////////////
document.write("<br>");
x.unshift(0);
document.write("<br>");
document.write(x)
//////////////////////
x.shift()
document.write("<br>");
document.write(x)
/////////////////////////

var para =   document.getElementsByClassName("p")[0];

para.onclick=function (){
    para.style.color = "blue";
}
////////////////////////////


document.write("<br>");
function h(){
    let m= q + y ;
    document.write(m);
}

let q=1;
let y=2;

h(q,y);

/////////////////////////////




