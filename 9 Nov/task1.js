document.getElementById("card1").style.display="none";

document.forms[0].onsubmit= function (e) {
    e.preventDefault();
    let name =document.getElementById("name").value;
    localStorage.setItem("firstname",name);
    //
    let age =document.getElementById("age").value;
    localStorage.setItem("age",age); 
    //
    let major =document.getElementById("major").value;
    localStorage.setItem("major",major); 
    //
    let university =document.getElementById("university").value;
    localStorage.setItem("university", university); 
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
    let textarea =document.getElementById("textarea").value;
    localStorage.setItem("textarea",textarea); 
    //
    getcard();
}
function getcard(){
    let name= localStorage.getItem("firstname");
    let age= localStorage.getItem("age");
    let major= localStorage.getItem("major");
    let university = localStorage.getItem("university");
    let gender = localStorage.getItem("gender");
    let language = localStorage.getItem("language");
    let textarea = localStorage.getItem("textarea");


    console.log (name)

    let card1 =document.getElementById("card1");
    card1.innerHTML= `
    <labe> Name :</label>
    <span id="firstname">${name}</span><br>
    <labe> Age :</labe>
    <span id="age">${age}</span><br>
    <labe> Major :</labe>
    <span id="major">${major}</span><br>
    <labe> Unviersity :</labe>
    <span id="university">${university}</span><br>
    <labe> Gender :</labe>
    <span id="gender">${gender}</span><br>
    <labe>Favourite Language : </labe>
    <span id="favouritelanguage">${language}</span><br>
    <labe> Brief Description :</labe>
    <span id="briefdescription">${textarea}</span><br>
    `
}


