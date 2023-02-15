//var generateBtn = document.querySelector(".start-button")
var timerEl = document.querySelector(".timer-count")

//generateBtn.addEventListener("click", startGame)

//function startGame() {
//    countdown();
//}

function countdown() {

    var timeLeft = 75;

    var timeInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent = timeLeft;
      if (timeLeft === 0) {
        clearInterval(timeInterval);
      }
    },1000);
  }

  countdown();