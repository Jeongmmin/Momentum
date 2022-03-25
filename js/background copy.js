const imgBox = document.querySelector("#img__box")
const images = ["background0.jpg", "background1.jpg", "background2.jpg", "background3.jpg", "background4.jpg", "background5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const colorBox = document.querySelectorAll("div.box, nav.box");
// const colors = ["#cbbde5", "#e4bedd", "bec6e4","#c2e2b1", ["#eee9a5", "#cac68c", "ffffbe"] ];
const colors = [["#cbbde5", "#ada1c3", "e9d9ff"],["#eee9a5", "#cac68c", "ffffbe"],["#bdd0e5", "#a1b1c3", "#d9efff"], ["#eee9a5", "#cac68c", "ffffbe"]];
console.log(colors);

const chooseColBtn = document.querySelector(".chooseColors");

console.log(chosenImage);


const bgImage = document.createElement("img");
console.log(bgImage);

bgImage.src = `./img/${chosenImage}`;

// document.body.appendChild(bgImage);
imgBox.appendChild(bgImage);

// conosole.log(colorBox)

function handleChangeBgColor() {
    const chosenColor = colors[Math.floor(Math.random() * colors.length)];
    for (let i = 0; i < colorBox.length; i++) {
        colorBox[i].style.background = `
        background: ${chosenColor[0]};
        box-shadow: 7px 7px 14px ${chosenColor[1]};, -7px -7px 14px ${chosenColor[2]};`;
    }
    document.body.style.background = chosenColor[0];
    // colorBox.style.background = chosenColor;
}

chooseColBtn.addEventListener("click", handleChangeBgColor);