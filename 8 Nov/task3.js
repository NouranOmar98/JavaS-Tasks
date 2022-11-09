function family (){
    var y = document.getElementById("font").value;
    if(y=="arial"){
        document.getElementById("paragraph").style.fontFamily="Arial";
    }
    else if(y=="cambria"){
        document.getElementById("paragraph").style.fontFamily="Cambria";
    }
    else if(y=="gillSans"){
        document.getElementById("paragraph").style.fontFamily="Gill Sans";
    }
}

///////

function size1(){
    var x=  document.getElementById("size").value;
    if (x== "25pt") {
        document.getElementById("paragraph").style.fontSize="25px";
    }
    else if (x== "35pt") {
        document.getElementById("paragraph").style.fontSize="35px";
    }
    else if (x== "45pt") {
        document.getElementById("paragraph").style.fontSize="45px";
    }
    }
    /////////

    function Bold (){
        var z= document.getElementById("Bold1").value;
        if (z== "Bold"){
        document.getElementById("paragraph").style.fontWeight="Bold";
        }
        
    }
   
    //////////

    function Italic (){
        var m= document.getElementById("Italic1").value;
        if (m== "Italic"){
        document.getElementById("paragraph").style.fontStyle="Italic";
        }
    }

    ///////////

    function Underlined (){
        var q= document.getElementById("Underlined1").value;
        if (q== "Underlined"){
        document.getElementById("paragraph").style.textDecoration="underline";
        }
    }















