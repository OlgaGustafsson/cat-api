"use strict";
const url = "https://api.thecatapi.com/v1/images/search?limit=10";
const imgElem = document.querySelector('#img');
const catsSec = document.querySelector(".a");
const cat = fetch(url)
    .then(response => {
    return response.json();
})
    .then(catsArray => {
    printCat(catsArray);
    console.log(catsArray);
});
function printCat(cats) {
    let button = document.querySelector("#button");
    button.addEventListener("click", (event) => {
        event.preventDefault();
        let randomN = Math.floor(Math.random() * cats.length + 1); // return slumpmässigt heltal 
        imgElem.innerHTML = "";
        imgElem.src = cats[randomN].url;
        // cats.src = cats[randomN].url;
        // imgElem.src = cats.src;
        //imgElem.src = cats[randomN].url;
        //catsSec.append(imgElem);
        //console.log(cats);
    });
}
;
