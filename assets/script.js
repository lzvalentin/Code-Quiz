var startBtn = document.getElementById('start')
var questionContainterEl = document.getElementById('questionContainer')
//let shuffleQuestions
var questionEl = document.getElementById('question')
var answerBtnEl = document.getElementById('answ-button')
var controls = document.getElementById('controls');
var timer;
var time = 120;
var countdown = document.getElementById('countdown');
var index = 0;


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
    }
]


// show game
function startGame() {

    //when the game starts we need to hide the controls container and display the question container
    //start our timer and display the time on the page

    controls.setAttribute('class', 'hide');
    questionContainterEl.removeAttribute('class');

    timer = setInterval(function () {
        time--;

        countdown.textContent = time

        if (time <= 0) {
        }

    }, 1000)

    countdown.textContent = time;

    showQuestion()
}

function showQuestion() {
    var currentQuestion = questions[index];

    questionEl.textContent = currentQuestion.question

    answerBtnEl.innerHTML = "";
    
    currentQuestion.options.forEach(function (choice) {
        var choiceBtn = document.createElement('button');
        choiceBtn.setAttribute('value', choice);

        choiceBtn.textContent = choice;

        choiceBtn.onclick = buttonClick;

        answerBtnEl.append(choiceBtn)
    })

}

function buttonClick() {
    console.log(this.value)

    if (this.value !== questions[index].answer) {
        time -= 10

        countdown.textContent = time;
    }

    index++

    if (index === questions.length) {
        alert('game over')
    } else {
        showQuestion()
    } 

}


// click button
startBtn.addEventListener('click', startGame)