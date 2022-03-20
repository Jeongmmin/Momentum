const imgBox = document.querySelector("#img__box")
const images = ["background0.jpg", "background1.jpg", "background2.jpg", "background3.jpg", "background4.jpg", "background5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

console.log(chosenImage);


const bgImage = document.createElement("img");
console.log(bgImage);

bgImage.src = `./img/${chosenImage}`;

// document.body.appendChild(bgImage);
imgBox.appendChild(bgImage);

