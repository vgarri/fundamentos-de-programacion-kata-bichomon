

//1
document.querySelector("#gen-1").innerHTML = "Generasión 1 Pokimon";
//2
let tarjetitas = document.querySelectorAll(".infocard-list");
tarjetitas[0].style.backgroundColor ='red';
//3
console.log(document.URL);
//4
console.log(window.location);
//5
console.log(document.querySelectorAll("img"));
//6
//"https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
let sources = document.querySelectorAll("img");
    sources.forEach((imagen)=> {
        imagen.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
    });


