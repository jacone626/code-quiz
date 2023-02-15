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

  //Questions

  const Questions = [{
    id: 0,
    q: "What is capital of India?",
    a: [{ text: "gandhinagar", isCorrect: false },
        { text: "Surat", isCorrect: false },
        { text: "Delhi", isCorrect: true },
        { text: "mumbai", isCorrect: false }
    ]

},
{
    id: 1,
    q: "What is the capital of Thailand?",
    a: [{ text: "Lampang", isCorrect: false, isSelected: false },
        { text: "phuket", isCorrect: false },
        { text: "Ayutthaya", isCorrect: false },
        { text: "Bangkok", isCorrect: true }
    ]

},
{
    id: 2,
    q: "What is the capital of Gujarat",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
    ]

},
{
    id: 3,
    q: "What is the capital of Thailand?",
    a: [{ text: "Lampang", isCorrect: false, isSelected: false },
        { text: "phuket", isCorrect: false },
        { text: "Ayutthaya", isCorrect: false },
        { text: "Bangkok", isCorrect: true }
    ]

},
{
    id: 4,
    q: "What is the capital of Gujarat",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
    ]

}

]