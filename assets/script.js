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
        question: "What are Pseudo elements?",
        options: [
            "Add special effects to selectors",
            "Apply styles in HTML mark-up",
            "None of the above",
            "All of the above"
        ],
        answer: "None of the above"

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

    }
]


// show game
function startGame() {

    //when the game starts we need to hide the controls container and display the question container
    // we need to start our timer and display the time on the page

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
        time -= 2

        countdown.textContent = time;
    }

    index++

    if (index === questions.length) {
        alert('game over')
    } else {
        showQuestion()
    }

}

// function answer(){

// }


// click button
startBtn.addEventListener('click', startGame)