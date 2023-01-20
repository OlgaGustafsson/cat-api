
const url = "https://api.thecatapi.com/v1/images/search?limit=10";
const imgElem = document.querySelector('#img') as HTMLImageElement;
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
        
        let randomN = Math.floor(Math.random() * cats.length + 1); // return slumpmässigt heltal 
        imgElem.innerHTML = "";
        cats.src = cats[randomN].url;
        imgElem.append(cats.src);
        //catsSec.append(imgElem);
        
       
        console.log(cats);

    });     
};