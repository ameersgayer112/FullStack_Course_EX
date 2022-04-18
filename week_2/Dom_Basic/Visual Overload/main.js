const getRandomColor = function () {
    const niceColors = [
      "#8e44ad",
      "#3498db",
       "#c0392b",
       "#f1c40f",
       "#d35400",
       "#2ecc71",
       "#1abc9c",
       "#2c3e50",
       "#7f8c8d",
    ];
  
    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
  };

const createBoxes = function()
{
    const box = document.createElement("div");

    box.style.width = "100px";
    box.style.height = "100px";
    box.style.backgroundColor = getRandomColor()
   
  
    box.onmouseover = function () {
      let randpmColor = getRandomColor();
      box.style.backgroundColor = randpmColor;
    };
  
    box.onmouseout = function () {};
  
    document.getElementById("container").appendChild(box);
   
    
};

for(let i = 0 ; i < 10; i ++)
{
    createBoxes()
}

const container = document.getElementById("container")
container.style.display = "flex"

///etension
const children = container.childNodes;
let check = 1
let color = children[0]
children.forEach(div => {
    if(div.style.backgroundColor !== color)
    {
        check = 0;
    } 
});

const header = document.createElement("h1")

if(check === 1)
{
    header.innerHTML = "All Boxes Same color"
}
else{
    header.innerHTML = "Not Same Color"
}

header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)



