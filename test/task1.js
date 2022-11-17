async function getData(){
    const select=document.getElementById("select")
    const response = await fetch ("https://www.breakingbadapi.com/api/characters");
    const data = await response.json();
    for (let i=0; i<data.length; i++){
    document.getElementById("select").innerHTML += `<option value=${data[i].img}>${data[i].name}</option>`

    }
}
getData();


function change(select){

    // const select = select.value;
    let image = document.getElementById("img");
    image.src = select.value;
}
