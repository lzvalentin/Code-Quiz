
var timerID;
var timeLeft = 75;
var timerEl=
var timerEl = document.getElementById("timer");
var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerEl = document.getElementById("question-container");
var startContainerEl = document.getElementById("start-container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var checkAnswerEl = document.getElementById("check-answer");
var viewHighScores = document.getElementById("highscores-link");
var submitButton = document.getElementById("submit-btn");
var clearScoreButton = document.getElementById("clear-btn");
var initialsField = document.getElementById("player-name");
var restartButton = document.getElementById("restart-btn");
var scoreField = document.getElementById("player-score");
var scores = JSON.parse(localStorage.getItem("scores")) || [];

var shuffledQuestions, currentQuestionIndex;



var questions = [
    {
        question: "What does CSS stand for?",
        options: [
            "Crazy Street Style",
            "Cats Serpents & Snails",
            "Code Schedule Site",
            "Cascading Style Sheets"
        ],
        answer: "Cascading Style Sheets"

    },
    {
        question: "What is 1+1?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        answer: "2"

    },
    {
        question: "Are Java and JavaScript the same?",
        options: [
            "yes",
            "No",
            "Maybe",
            "None of the above"
        ],
        answer: "No"
    },
    {
        question: "How do programmers enjoy life?",
        options: [
            "Seeing their code work",
            "laughing at the comma they missed",
            "All of the Above",
            "None of the Above"
        ],
        answer: "All the Above"
    },
    {
        question: "A loop that never ends is referred to as a(n)_________.",
        options: [
            "While Loop",
            "Infinite Loop",
            "Recursive Loop",
            "for loop"
        ],
        answer: "Infinite Loop"
    },

    {
        question: "_______ is the process of finding errors and fixing them within a program.",
        options: [
            "Scanning",
            "Executing",
            "Compiling",
            "Debugging"
        ],
        answer: "Debugging"
    },
]


