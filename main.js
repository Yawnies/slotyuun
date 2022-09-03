const optionArray = ["svg/index0.svg", "svg/index1.svg", "svg/index2.svg", "svg/index3.svg", "svg/index4.svg"];
  //                  0    1      2      3      4      5
let randomArray = [];
let results = null;


document.querySelector("#rollbutton").addEventListener("click", main);

function main() {
  document.querySelector(".default-prize-text").classList.remove("normal-prize-text");
  document.querySelector(".roll-results").classList.remove("green-border");
  document.querySelector(".default-prize-text").innerHTML = "prize box.";
  disableButton();
  document.querySelector("#rollbutton").innerHTML = "pulling..."
  const intervalId = setInterval(playAnimation, 35);
  setTimeout(randomNumbers, 2000);
  setTimeout(displayFinalResult, 2000);
  setTimeout(function() {clearInterval(intervalId);}, 2000);
}

function randomNumbers() {
  let random = Math.floor((Math.random() * 5));
  randomArray.push(random);
  random = Math.floor((Math.random() * 5));
  randomArray.push(random);
  random = Math.floor((Math.random() * 5));
  randomArray.push(random);
  results = `${randomArray[0]}${randomArray[1]}${randomArray[2]}`;
}

function displayFinalResult() {
  document.querySelector(".slot1").src = optionArray[randomArray[0]];
  document.querySelector(".slot2").src = optionArray[randomArray[1]];
  document.querySelector(".slot3").src = optionArray[randomArray[2]];
  randomArray = [];
  enableButton();
  prizeBoxSwitch();
  document.querySelector("#rollbutton").innerHTML = "pull."
}

function playAnimation() {
  let rd2 = null;
  let rd = Math.floor((Math.random() * 5));
    if (rd != rd2) {
      document.querySelector(".slot1").src = optionArray[rd];
      document.querySelector(".slot2").src = optionArray[rd];
      document.querySelector(".slot3").src = optionArray[rd];
  } else {
    return;
  }
  rd2 = rd;
}

function disableButton() {
  document.querySelector("#rollbutton").disabled = true;
  document.querySelector("#rollbutton").style.cursor = "default";
}

function enableButton() {
  document.querySelector("#rollbutton").disabled = false;
  document.querySelector("#rollbutton").style.cursor = "pointer";
}

function prizeBoxSwitch() {
  let randomResult = Math.floor(Math.random() * 3);
  switch (results) {
    case "000":
    document.querySelector(".default-prize-text").innerHTML = `You won a secret link!<br><span class='greenie'><a href='${secretArray[randomResult]}' target='_blank'>Link</a></span>`;
    document.querySelector(".default-prize-text").classList.add("normal-prize-text");
    document.querySelector(".roll-results").classList.add("green-border");
      break;
    case "111":
    document.querySelector(".default-prize-text").innerHTML = `You won $1000 in real money!<br><span class='greenie'><a href='https://www.youtube.com/watch?v=LsCHjlYw2oM' target='_blank'>*crickets*</a></span>`;
    document.querySelector(".default-prize-text").classList.add("normal-prize-text");
    document.querySelector(".roll-results").classList.add("green-border");
      break;
    case "222":
    document.querySelector(".default-prize-text").innerHTML = `You won an asian cosplay!<br><span class='greenie'><a href='${asianArray[randomResult]}' target='_blank'>Link</a></span>`;
    document.querySelector(".default-prize-text").classList.add("normal-prize-text");
    document.querySelector(".roll-results").classList.add("green-border");
      break;
    case "333":
    document.querySelector(".default-prize-text").innerHTML = `You won a game link!<br><span class='greenie'><a href='${gameArray[randomResult]}' target='_blank'>Link</a></span>`;
    document.querySelector(".default-prize-text").classList.add("normal-prize-text");
    document.querySelector(".roll-results").classList.add("green-border");
      break;
    case "444":
    document.querySelector(".default-prize-text").innerHTML = `You won a playlist link!<br><span class='greenie'><a href='${playlistArray[randomResult]}' target='_blank'>Link</a></span>`;
    document.querySelector(".default-prize-text").classList.add("normal-prize-text");
    document.querySelector(".roll-results").classList.add("green-border");
      break;
    default:
    document.querySelector(".default-prize-text").innerHTML = "no prize won. try again!";
  }
}

//////// Prize Array

const secretArray = ["https://www.youtube.com/watch?v=dQw4w9WgXcQ", "https://www.youtube.com/watch?v=zDwK-DPZ1ac", "https://www.youtube.com/watch?v=1yDXommZwWQ"];
const playlistArray = ["https://www.youtube.com/watch?v=e7T7f29DOpw", "https://www.youtube.com/watch?v=2s4lrLr8gFg", "https://www.youtube.com/watch?v=9hT4Y2dTU-k"];
const asianArray = ["https://e-hentai.org/g/2149193/9809b83fa6/", "https://e-hentai.org/g/1967901/ac8e2470c0/", "https://e-hentai.org/g/1966141/d0aa30c2f8/"];
const gameArray = ["https://store.steampowered.com/app/22380/Fallout_New_Vegas/", "https://store.steampowered.com/app/1238840/Battlefield_1/", "https://playoverwatch.com/en-us/"];
