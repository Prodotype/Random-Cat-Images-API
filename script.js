const url = "https://api.thecatapi.com/v1/images/search"

const section = document.querySelector(".container")
const button = document.querySelector('.btn');

console.log(button);
button.addEventListener("click", getRandomCats);


randomCatPhoto = (json) => {
    let photo = json[0].url
    section.classList.add('cats')

    let image = document.createElement('img')
    image.src = json[0].url;
    image.width = json[0].width;
    image.height = json[0].height;
    image.classList.add ('random_cats')
    image.alt = photo
    section.appendChild(image);
};

async function getRandomCats(){
     section.innerHTML= ""
    try {
        const response = await fetch(url)
        const json = await response.json()
        console.log("JSON", json);
        return randomCatPhoto(json)
    } catch {

    }
};