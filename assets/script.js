var generateBtn = document.querySelector("#start-quiz")
var timerEl = document.querySelector(".timer-count")

generateBtn.addEventListener("click", startQuiz)

function startQuiz() {
   countdown();
}

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

  //Questions

  var Questions = [{
    id: 0,
    q: "Commonly used data types DO NOT include:",
    a: [{ text: "strings", isCorrect: false },
        { text: "booleans", isCorrect: false },
        { text: "alerts", isCorrect: true },
        { text: "numbers", isCorrect: false }
    ]

},
{
    id: 1,
    q: "The condition in an if/else stateent is enclosed within:",
    a: [{ text: "quotes", isCorrect: false },
        { text: "curly brackets", isCorrect: false },
        { text: "parentheses", isCorrect: true },
        { text: "square brackets", isCorrect: false}
    ]

},
{
    id: 2,
    q: "Arrays in JavaScript can be used to store:",
    a: [{ text: "numbers and strings", isCorrect: false },
        { text: "other arrays", isCorrect: false },
        { text: "booleans", isCorrect: false },
        { text: "all of the above", isCorrect: true }
    ]

},
{
    id: 3,
    q: "A very useful tool used during development and debugging for printing content to the debugger is:",
    a: [{ text: "JavaScript", isCorrect: false, isSelected: false },
        { text: "terminal/bash", isCorrect: false },
        { text: "for loops", isCorrect: false },
        { text: "console.log", isCorrect: true }
    ]

},
{
    id: 4,
    q: "String values must be enclosed within     when being assigned to variables.",
    a: [{ text: "commas", isCorrect: false },
        { text: "curly brackets", isCorrect: false },
        { text: "quotes", isCorrect: true },
        { text: "parentheses", isCorrect: false }
    ]

}

]