const images = ["background1.jpg", "background2.jpg", "background3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

console.log(chosenImage);


const bgImage = document.createElement("img");
console.log(bgImage);

bgImage.src = `./img/${chosenImage}`;

document.body.appendChild(bgImage);

