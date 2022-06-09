// Query Selectors go here
var answerBtn1 = document.querySelector('#answer1');
var answerBtn2 = document.querySelector('#answer2');
var answerBtn3 = document.querySelector('#answer3');
var answerBtn4 = document.querySelector('#answer4');
var viewHighscoreEl = document.querySelector('#viewHighscore');
var timeLeftEl = document.querySelector('#timeLeft');
var questionsEl = document.querySelector('#questions');

// Regualr variables go here
const questions = [
    {
        question: "Commonly used data types do not include:",
        answers: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
        correct: "3. Alerts"
    },
    {
        question: "The Condition in an if/else statement is encloded with __.",
        answers: ["1. Quotes", "2. Curly Brackets", "3. Parenthesis", "4. Square Brackets"],
        correct: "3. Parenthesis"
    },
    {
        question: "String values must be enclosed within __ when being assigned to variables.",
        answers: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parentheses"],
        correct: "3. Quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. Javascript", "2. Terminal/Bash", "3. For Loops", "4. Console.Log"],
        correct: "4. Console.Log"
    }
]
let time;
let correctAnswers;
//Init function that starts on page load
function init() {
    // getScore();
    questionsEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that Incorrect answers will penalize your sore/time by ten second.";
    answerBtn1.style.display = "none";
    answerBtn2.style.display = "none";
    answerBtn3.style.display = "none";
    answerBtn4.style.display = "none";
}

// Function for the time left
const timeRemaining = function() {
    
}

// Function for the questions and answers
const startQuiz = function() {

}

// Function for keeping score in local storage
const getScore = function() {
    let storedScore = localStorage.getItem("score");
    if (score !== null) {
        let score = JSON.parse(storedScore);
        return score;
    } else {
        score = [];
    }
    return score;
}

// Function for final screen that displays score
const highscore = function() {
    
}

// Function that activates on button click
// Will call the other functions in this one
const gameStart = function() {

}

document.getElementById("#quizStart").addEventListener("click", gameStart);
init();