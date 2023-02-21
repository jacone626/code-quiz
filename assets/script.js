var startQuizBtn = document.querySelector("#start-quiz")
var timerEl = document.querySelector("#timer-count")
var codingQuizEl = document.querySelector("#coding-quiz-challenege")
var allDoneEl = document.querySelector("#all-done")
var currentQuestion = 0
var timeLeft = 75;
var timeInterval;

//Start quiz when you click on the start quiz button
startQuizBtn.addEventListener("click", startQuiz) 
    
startQuizBtn.addEventListener("click", () => {
   codingQuizEl.classList.add("hide")
})

//This starts the quiz and shows the questions
function startQuiz() {
   countdown();
   showQuestion();
}

//This is the timer function
function countdown() {

    timeInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timeInterval);
        ShowFinalScore();
      }
    },1000);
  }

//Questions

  var questions = [{
    prompt: "Commonly used data types DO NOT include:",
    answers: [ "1. strings",
         "2. booleans",
         "3. alerts",
         "4. numbers"
    ],
    correctAnswer: "3. alerts"

},
{
    prompt: "The condition in an if/else statement is enclosed within:",
    answers: [ "1. quotes",
         "2. curly brackets",
         "3. square brackets",
         "4. parentheses"
    ],
    correctAnswer: "4. parentheses"

},
{
    prompt: "Arrays in JavaScript can be used to store:",
    answers: [ "1. numbers and strings",
         "2. other arrays",
         "3. booleans",
         "4. all of the above"
    ],
    correctAnswer: "4. all of the above"

},
{
    prompt: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [ "1. JavaScript",
         "2. terminal/bash",
         "3. for loops",
         "4. console.log"
    ],
    correctAnswer: "4. console.log"

},
{
    prompt: "String values must be enclosed within     when being assigned to variables.",
    answers: [ "1. commas",
         "2. curly brackets",
         "3. quotes",
         "4. parentheses"
    ],
    correctAnswer: "3. quotes"

}

]


//Creating variables for the question and answers 
var result = document.getElementById("result");
var promptEl = document.getElementById("question");
var questionEl = document.getElementById("quiz-questions");

var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');


function showQuestion() {
  
questionEl.classList.remove("hide")

// Setting the question text
promptEl.innerText = questions[currentQuestion].prompt;

// Providing option text 
op1.innerText = questions[currentQuestion].answers[0];
op2.innerText = questions[currentQuestion].answers[1];
op3.innerText = questions[currentQuestion].answers[2];
op4.innerText = questions[currentQuestion].answers[3];
}

//Show answer and move to the next question unless time is out or we have completed the quiz

var optionsButtons = document.getElementById("option-container");

function showAnswer (e) {

   if (e.target.textContent ===  questions[currentQuestion].correctAnswer) {
        result.innerText = "Correct!"}

    else {
        result.innerText = "Wrong!";
        timeLeft= timeLeft-15;
    }

    if (currentQuestion < 4) {
    currentQuestion++;
    showQuestion();
    }

    else {
        clearInterval(timeInterval)
        ShowFinalScore();
    }
}

optionsButtons.onclick = showAnswer

//Show final score
var scoreEl = document.getElementById("score-value")

function ShowFinalScore () {
  questionEl.classList.add("hide");
  allDoneEl.classList.remove("hide");
  scoreEl.innerText = ("Your final score is ") + timeLeft
}


//Submit score. Used some jQuery for practice
var highscoresEl = document.getElementById("highscores");
var highscoresListEl = $("#highscores-list");
var listStorageEl = $("#list-storage")
var formEl = $("#form");
var headerEl = document.getElementById("header-timer");

function submitFinal(event) {
    event.preventDefault();

    var yourInitials = $("#form-initials").val() + ' - ' + timeLeft

    highscoresListEl.append("<li>" + yourInitials + "<li>")

    localStorage.setItem("highscore", yourInitials)

    allDoneEl.classList.add("hide");

    headerEl.classList.add("hide")

    highscoresEl.classList.remove("hide");

    renderHighscore();
}

formEl.on("submit", submitFinal)

renderHighscore();

function renderHighscore() {
    var yourInitials = localStorage.getItem("highscore")

    if (!yourInitials) {
        return;
    }

   highscoresListEl.textContent = yourInitials;
}

//Refresh page and return to start
goBackBtn = document.getElementById("go-back")

goBackBtn.addEventListener("click", function() {
    location.reload();
})



//Remove the local storage item
clearBtn = document.getElementById("clear-score")

clearBtn.addEventListener("click", function() {
    localStorage.removeItem("highscore");
}
)

//View Highscores page
var viewHighscores = document.getElementById("high-score")

viewHighscores.addEventListener("click", renderHighscore)
