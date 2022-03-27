const imgBox = document.querySelector("#img__box")
const images = ["background0.jpg", "background1.jpg", "background2.jpg", "background3.jpg", "background4.jpg", "background5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const colorBox = document.querySelectorAll("div.box, nav.box, li");
const downColorBox = document.querySelector("div.down__box");
const colors = [["#e0e0e0", "#bebebe", "#ffffff"],["#cbbde5", "#ada1c3", "#e9d9ff"],["#e5debd", "#c3bda1", "#ffffd9"],["#e5bdbd", "#c3a1a1", "#ffd9d9"], ["#bdcce5", "#a1adc3", "#d9ebff"]];
console.log(colors);

const chooseColBtn = document.querySelector("#changeColorsBtn");

// const todoLi = document.querySelector("#todos li")

// console.log(chosenImage);

const bgImage = document.createElement("img");
// console.log(bgImage);

bgImage.src = `./img/${chosenImage}`;

imgBox.appendChild(bgImage);


function handleChangeBgColor() {
    const chosenColor = colors[Math.floor(Math.random() * colors.length)];
    for (let i = 0; i < colorBox.length; i++) {
        colorBox[i].style.background = `${chosenColor[0]}`;
        colorBox[i].style.boxShadow = `7px 7px 14px ${chosenColor[1]}, 
                                    -7px -7px 14px ${chosenColor[2]}`;
    }
    document.body.style.background = chosenColor[0];
    // document.body.style.color = white;

    downColorBox.style.background = chosenColor[0];
    downColorBox.style.boxShadow = `inset 7px 7px 14px ${chosenColor[1]}, 
    inset -7px -7px 14px ${chosenColor[2]}`;
}

chooseColBtn.addEventListener("click", handleChangeBgColor);