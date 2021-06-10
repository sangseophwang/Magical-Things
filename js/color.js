const randomColor = [
  {
    color: "linear-gradient(-45deg,#ffa69e,#e58c8a,#eec0c6)",
  },
  {
    color: "linear-gradient(-45deg,#9fa4c4,#b3cdd1,#bdd4e7,#8693ab)",
  },
  {
    color: "linear-gradient(-45deg,#a7acd9,#9e8fb2,#90d5ec, #fc575e)",
  },
  {
    color: "linear-gradient(-45deg,#ffd8cb,#f9d29d,#fad0c4,#f1a7f1)",
  },
  {
    color: "linear-gradient(-45deg,#bbf0f3,#f6d285,#e8dbfc,#f8f9d2)",
  },
  {
    color: "linear-gradient(-45deg,#09203f,#537895,#2f4353,#d2ccc4)",
  },
  {
    color: "linear-gradient(-45deg,#2884b8,#d1bad2,#b1ade2,#7ddff8)",
  },
  {
    color:
      "linear-gradient(-45deg,#0d324d,#485461,#7f5a83,#c2b6b6,#a5c7b7,#8cacac)",
  },
];

const clickColorButton = document.querySelector(".bottomButton-color");
const BODY = document.body.style;

function handleRandomColor() {
  const todayColor =
    randomColor[Math.floor(Math.random() * randomColor.length)];
  BODY.background = todayColor.color;
  BODY.backgroundSize = "400% 400%";
  BODY.animation = "gradient 20s ease infinite";
}

clickColorButton.addEventListener("click", handleRandomColor);
document.addEventListener("DOMContentLoaded", handleRandomColor);
