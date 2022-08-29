var dice1 = document.querySelector("img.img1");
var dice2 = document.querySelector("img.img2");
var header = document.querySelector("h1");
var randomNumber1 = Math.floor(Math.random() * (7 - 1) + 1);
var randomNumber2 = Math.floor(Math.random() * (7 - 1) + 1);
var imagePath = "images/dice";
var diceImg1 = imagePath.concat(randomNumber1, ".png");
var diceImg2 = imagePath.concat(randomNumber2, ".png");

dice1.setAttribute("src", diceImg1);
dice2.setAttribute("src", diceImg2);

if (randomNumber1 > randomNumber2) {
  header.innerHTML = "🚩 Player 1 Wins!";
  header.style.fontSize = "6.5rem";
} else if (randomNumber1 < randomNumber2) {
  header.innerHTML = "Player 2 Wins! 🚩";
  header.style.fontSize = "6.5rem";
} else {
  header.innerHTML = "Draw!";
}
