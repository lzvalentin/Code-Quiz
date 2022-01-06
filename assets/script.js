var startBtn = document.getElementById('start-btn')
var questionContainterEl =document.getElementById('question')
let shuffleQuestions
var questionEl = document.getElementById('question')
var answerBtnEl = document.getElementById('answ-button')

// click button
startBtn.addEventListener('click', startGame)

// show game
function startGame(){
startBtn.classList.add('hide')
shuffleQuestions = questions.sort(Math.random()-.5)
questionContainterEl.classList.remove('hide')
nextQuestion()
}

function nextQuestion(){
showQuestion(shuffleQuestions)
 }

function showQuestion(questions){
    questionEl.innertext= question.question
}


// function answer(){

// }

var questions =[
    {
    question: "What are Pseudo elements?",
     answers: [ 
         {text: "Add special effects to selectors", correct: false},
         {text: "Apply styles in HTML mark-up", correct: false},
         {text: "None of the above", correct: false},
         {text: "All of the above", correct: true}
     ]

    }
]