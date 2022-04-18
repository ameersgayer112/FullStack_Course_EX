// console.log(document)
const playingField = document.getElementById("playing-field")





const moveRight = function(){
    const block1 = document.getElementById("block")
    let left = parseInt(block1.style.left) || 0
    left += 15
    block1.style.left = left + "px"
  };

  const moveLeft = function () {
    const block = document.getElementById("block");
    let left = parseInt(block.style.left) || 0;
    left -= 15;
    block.style.left = left + "px";
  };

  const moveUp = function () {
    const block = document.getElementById("block");
    let Top = parseInt(block.style.top) || 0;
    Top -= 15;
    block.style.top = Top + "px";
  };

const moveDown = function () {
  const block = document.getElementById("block");
  let Down = parseInt(block.style.top) || 0;
  Down += 15;
  block.style.top = Down + "px";
};



const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)

const subHeader = document.createElement("h2")
subHeader.innerHTML = "Game by: ~The Creator~"
subHeader.setAttribute("class", "sub-header")
document.body.appendChild(subHeader)