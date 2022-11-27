document.querySelector("h1").innerHTML = "I've changed the text inside.";
document.querySelector("h1").style.fontFamily = "Test Calibre Black, arial";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.color = "#0080ff";

document.querySelector("p").style.fontFamily = "arial";
document.querySelector("p").style.textAlign = "center";
document.querySelector("p").style.color = "white";
document.querySelector("p").style.marginTop = "100px";

let liSelect = document.querySelectorAll("li");

for (let i of liSelect) {
  i.style.color = "white";
  i.style.listStyleType = "none";
  i.style.textAlign = "center";
}

document.querySelector("ul").style.margin = "auto";
document.querySelector("ul").style.width = "50%";
document.querySelector("ul").style.fontFamily = "arial";
document.querySelectorAll("li")[0].style.backgroundColor = "#019946";
document.querySelectorAll("li")[1].style.backgroundColor = "#0080ff";
document.querySelectorAll("li")[2].style.backgroundColor = "crimson";

document.querySelector("body").style.fontSize = "30px";
document.querySelector("body").style.backgroundColor = "#97caff";

greenColourClick = () => {
  removeP();
  // document.querySelectorAll("li")[0].style.color = "#019946";
  // document.querySelectorAll("li")[0].style.backgroundColor = "white";
  document.querySelectorAll("li")[0].style.border = "4px dashed white"
  document.querySelector("body").style.backgroundColor = "#019946";
  document.querySelector("h1").style.color = "#90EE90";
  document.querySelectorAll("li")[1].style.backgroundColor = "#0080ff";
  document.querySelectorAll("li")[2].style.backgroundColor = "crimson";
  document.querySelectorAll("li")[1].style.color = "white";
  document.querySelectorAll("li")[2].style.color = "white";
  document.querySelectorAll("li")[1].style.border = "none";
  document.querySelectorAll("li")[2].style.border = "none";
}

blueColourClick = () => {
  removeP();
  // document.querySelectorAll("li")[1].style.color = "#0080ff";
  // document.querySelectorAll("li")[1].style.backgroundColor = "white";
  document.querySelectorAll("li")[1].style.border = "4px dashed white"
  document.querySelector("body").style.backgroundColor = "#0080ff";
  document.querySelector("h1").style.color = "#97caff";
  document.querySelectorAll("li")[0].style.backgroundColor = "#019946";
  document.querySelectorAll("li")[2].style.backgroundColor = "crimson";
  document.querySelectorAll("li")[0].style.color = "white";
  document.querySelectorAll("li")[2].style.color = "white";
  document.querySelectorAll("li")[0].style.border = "none";
  document.querySelectorAll("li")[2].style.border = "none";
}

redColourClick = () => {
  removeP();
  // document.querySelectorAll("li")[2].style.color = "crimson";
  // document.querySelectorAll("li")[2].style.backgroundColor = "white";
  document.querySelectorAll("li")[2].style.border = "4px dashed white"
  document.querySelector("body").style.backgroundColor = "crimson";
  document.querySelector("h1").style.color = "#0080ff";
  document.querySelectorAll("li")[0].style.backgroundColor = "#019946";
  document.querySelectorAll("li")[1].style.backgroundColor = "#0080ff";
  document.querySelectorAll("li")[0].style.color = "white";
  document.querySelectorAll("li")[1].style.color = "white";
  document.querySelectorAll("li")[0].style.border = "none";
  document.querySelectorAll("li")[1].style.border = "none";
}

normalBackground = () => (document.querySelector("body").style.backgroundColor = "#97caff");

document.querySelectorAll("li")[0].addEventListener("click", greenColourClick);
document.querySelectorAll("li")[1].addEventListener("click", blueColourClick);
document.querySelectorAll("li")[2].addEventListener("click", redColourClick);
// document.querySelector("body").addEventListener("click", normalBackground);

// const eachItem = [
//   document.querySelectorAll("li")[0],
//   document.querySelectorAll("li")[1],
//   document.querySelectorAll("li")[2]
// ]

// eachItem.map((l, j) => {
//   l.style.color = "orangered"
//   if (j == 0) {
//     l.style.color = "limegreen"
//   } else if (j == 1) {
//     l.style.color = "#0080ff"
//   } else {
//     l.style.color = "crimson"
//   }
// })

removeP = () => {
  document.querySelector("p").innerHTML = "";
}