//alphabet array
function alphabet() {
  const alpha = [];
  for (i = 97; i <= 122; i++) {
    alpha.push(String.fromCharCode(i));
  }
  return alpha;
}
//pick a random array
function random() {
  const alpha = alphabet();
  const charPlace = document.getElementById("charPlace");
  const ran = Math.round(Math.random() * 25);
  charPlace.innerText = alpha[ran].toUpperCase();
  const allkbd = document.getElementsByClassName("kbd");
  for (let i = 0; i < allkbd.length; i++) {
    if (allkbd[i].innerText == alpha[ran]) {
      allkbd[i].classList.add("kbdstyle");
    } else {
      allkbd[i].classList.remove("kbdstyle");
    }
  }
}

random();

function scoreUpdate() {
  const currentScore = document.getElementById("score");
  let score = parseInt(currentScore.innerText);
  let updateScore = score + 1;
  currentScore.innerText = updateScore;
}

function lifemanager() {
  const currentLife = document.getElementById("life");
  let lifeCount = parseInt(currentLife.innerText);
  let updatelife = lifeCount - 1;
  if (updatelife == 0) {
    const lastscore = parseInt(document.getElementById("score").innerText);
    // use localStorage to save value for next page
    localStorage.setItem("lastscore", lastscore);
    window.location.href = "score.html";
  } else {
    currentLife.innerText = updatelife;
  }
}

//keyboard paress

document.addEventListener("keyup", function keyboardPress(event) {
  const playertype = event.key;
  const needTOType = document.getElementById("charPlace");
  console.log(playertype, needTOType.innerText);
  if (playertype == needTOType.innerText.toLowerCase()) {
    scoreUpdate();
    random();
  } else {
    lifemanager();
  }
});

//---------------Score.html

function score(){
  const score = localStorage.getItem("lastscore");
  const scoreOutput = document.getElementById("scoreOutput");
  scoreOutput.innerText = score;
}

