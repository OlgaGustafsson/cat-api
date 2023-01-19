
const url = "https://api.thecatapi.com/v1/images/search?limit=10";
const catsDiv = document.querySelector("#img") as HTMLImageElement;
const catsSec = document.querySelector(".a") as HTMLElement;

const cat = fetch(url)
    .then(response => {
        return response.json();
    })
    .then(catsArray => {
        printCat(catsArray);

        console.log(catsArray);
        
    });

function printCat(cats: any) {
    let button = document.querySelector("#button") as HTMLButtonElement;
    button.addEventListener("click", (event) => {
        event.preventDefault();
        
        let randomN = Math.floor(Math.random() * cats.length);
        catsDiv.innerHTML = "";
        cats.src = cats[randomN].url;
        catsDiv.append(cats.src);
        catsSec.append(catsDiv);
        
       
        console.log(cats);

    });     
};