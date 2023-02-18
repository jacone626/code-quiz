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
    a: [{ text: "1. strings", isCorrect: false },
        { text: "2. booleans", isCorrect: false },
        { text: "3. alerts", isCorrect: true },
        { text: "4. numbers", isCorrect: false }
    ]

},
{
    id: 1,
    q: "The condition in an if/else statement is enclosed within:",
    a: [{ text: "1. quotes", isCorrect: false },
        { text: "2. curly brackets", isCorrect: false },
        { text: "3. square brackets", isCorrect: false },
        { text: "4. parentheses", isCorrect: true}
    ]

},
{
    id: 2,
    q: "Arrays in JavaScript can be used to store:",
    a: [{ text: "1. numbers and strings", isCorrect: false },
        { text: "2. other arrays", isCorrect: false },
        { text: "3. booleans", isCorrect: false },
        { text: "4. all of the above", isCorrect: true }
    ]

},
{
    id: 3,
    q: "A very useful tool used during development and debugging for printing content to the debugger is:",
    a: [{ text: "1. JavaScript", isCorrect: false, isSelected: false },
        { text: "2. terminal/bash", isCorrect: false },
        { text: "3. for loops", isCorrect: false },
        { text: "4. console.log", isCorrect: true }
    ]

},
{
    id: 4,
    q: "String values must be enclosed within     when being assigned to variables.",
    a: [{ text: "1. commas", isCorrect: false },
        { text: "2. curly brackets", isCorrect: false },
        { text: "3. quotes", isCorrect: true },
        { text: "4. parentheses", isCorrect: false }
    ]

}

]

// Set start
var start = true;
  
// Iterate
function iterate(id) {
  
    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
  
    // Getting the question
    var question = document.getElementById("question");
  
  
    // Setting the question text
    question.innerText = Questions[id].q;
  
    // Getting the options
    var op1 = document.getElementById('op1');
    var op2 = document.getElementById('op2');
    var op3 = document.getElementById('op3');
    var op4 = document.getElementById('op4');
  
  
    // Providing option text 
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;
  
    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;
  


// Show selection for op1
op1.addEventListener("click", () => {
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    selected = op4.value;
})


// Moving to the next question after selecting an option


var optionsButton = document.getElementsByClassName("option");
var id = 0;
var result = document.getElementsByClassName("result");

for (i of optionsButton) {
i.addEventListener("click", () => {
start=false;
if (id < 4) {
    id++;
    iterate(id);
} 
    
else {
    // If there are no more questions, show the score 
}

if (selected == "true") {
    result[0].innerHTML = "Correct!";
} 
else {
    result[0].innerHTML = "Wrong!";
}
});
}

//Show final score
var finalScore = 


result[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "Correct!";
    } else {
        result[0].innerHTML = "Wrong!";
    }
})
}

if (start) {
    iterate("0");
}



