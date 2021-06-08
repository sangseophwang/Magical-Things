const randomColor = [
  {
    color:
      "linear-gradient(-45deg,#5f0a87,#a4508b,#861657,#ffa69e,#e58c8a,#eec0c6)",
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
