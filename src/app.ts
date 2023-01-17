
const url = "https://api.thecatapi.com/v1/images/search?limit=10";
const imgElement = document.querySelector("#img") as HTMLImageElement;
imgElement.className = ("cat");


const p = fetch(url)
    .then(response => {
        return response.json();
    }).then(catsArray => {
        printCat(catsArray);
    });



function printCat(cats: any) {
    let randomButton = document.querySelector("#button") as HTMLButtonElement;
    randomButton.addEventListener("click", (event) => {
        let randomNr = Math.floor(Math.random() * cats.length);
        const catsSec = document.querySelector(".a") as HTMLElement;
        catsSec.innerHTML = "";
        catsSec.style.display = "block";
        imgElement.style.height = "500px";
        imgElement.style.width = "850px";
        imgElement.src = cats[randomNr].url;
        catsSec.append(imgElement);

    })
   
};





// const url = "https://api.thecatapi.com/v1/images/search?limit=10";
// const imageElement = document.createElement("img") as HTMLImageElement;
// imageElement.className = ("catImage");

// const p = fetch(url)
// .then(response => {
//    return response.json();
// }).then(catsArray => {
//    displayCat(catsArray);
// });


// function displayCat(cats: any){
//    let randomizeBtn = document.querySelector(".randomizeButton") as HTMLButtonElement;
//    randomizeBtn.addEventListener("click", (e) => {
//         let randomNr = Math.floor(Math.random() * cats.length);
//         const catsDiv = document.querySelector(".container") as HTMLElement;
//         catsDiv.innerHTML = "";
//         catsDiv.style.display = "block";
//         imageElement.style.height = "500px"
//         imageElement.style.width = "850px"
//         imageElement.src = cats[randomNr].url;
//         catsDiv.append(imageElement);
//    })

// }