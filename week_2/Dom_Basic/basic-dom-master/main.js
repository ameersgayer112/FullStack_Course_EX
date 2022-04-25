const playingField = document.getElementById("playing-field")

const moveRight = function(){
    const block = document.getElementById("block")
    let position = parseInt(block.style.left) || 0
    if(position === 390)
    {
      position = 10
    }
    position += 15
    block.style.left = position + "px"
  };

  const moveLeft = function () {
    const block = document.getElementById("block");
    let position = parseInt(block.style.left) || 0;
    if(position <= 10)
    {
      position = 405
    }
    position -= 15;
    block.style.left = position + "px";
  };

  const moveUp = function () {
    const block = document.getElementById("block");
    let position = parseInt(block.style.top) || 0;
    if(position <= 10)
    {
      position = 420
    }
    position -= 15;
    block.style.top = position + "px";
  };

const moveDown = function () {
  const block = document.getElementById("block");
  let position = parseInt(block.style.top) || 0;
  if(position >= 405)
  {
    position = 0
  }
  position += 15;
  block.style.top = position + "px";
};



