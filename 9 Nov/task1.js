document.getElementById("card1").style.display="none";

document.forms[0].onsubmit= function (e) {
    e.preventDefault();
    var x =document.getElementById("name").value;
    localStorage.setItem("firstname",x);
    //
    var y =document.getElementById("age").value;
    localStorage.setItem("age",y); 
    //
    var z =document.getElementById("major").value;
    localStorage.setItem("major",z); 
    //
    var q =document.getElementById("university").value;
    localStorage.setItem("university",q); 
    //
    document.getElementById("card1").style.display="block";
    document.getElementById("card1").style.background="Pink";
    document.getElementById("card1").style.border="3px solid black";
    document.getElementById("card1").style.width="16%";
    //
    let gender = document.getElementsByName("gender");
    for(let i =0 ; i <gender.length ; i++){
        if(gender[i].checked){
            gender =  gender[i].value
        }
        localStorage.setItem("gender",gender); 
    }
    //
    let languages = document.getElementsByName("language");
    let langs = []; 
    for(let i =0 ; i <languages.length ; i++){
    if(languages[i].checked){
      langs.push(languages[i].value);
    }
    localStorage.setItem("language",langs);
    }
    //

}

