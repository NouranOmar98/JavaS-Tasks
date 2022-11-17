async function getData(){
    const response = await fetch ("https://www.breakingbadapi.com/api/characters");
    const data = await response.json();
    console.log(data)
    for (let i=0; i<data.length; i++){
    document.writeln(`<br><h1> Name is </h2><h1> ${data[i].name} </h1> <img src= ${data[i].img}>`)
    }

    

}


getData();