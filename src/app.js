"use strict";
const url = "https://api.thecatapi.com/v1/images/search?limit=10";
const catsDiv = document.querySelector("#img");
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
        catsDiv.innerHTML = "";
        cats.src = cats[randomN].url;
        catsDiv.append(cats.src);
        catsSec.append(catsDiv);
        console.log(cats);
    });
}
;
