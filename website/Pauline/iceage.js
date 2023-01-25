const restartBtn = document.getElementById("restart");
const nextBtn = document.getElementById("next");
let Btn1;
let Btn2;
let Btn3;
let Btn4;
let txtInput;

let openTrue = false;
const questionText = document.getElementById("question-text");

let multHTML = `
<button class="btn btn-option" id="Btn1">Option 1</button>
<button class="btn btn-option" id="Btn2">Option 2</button>
<button class="btn btn-option" id="Btn3">Option 3</button>
<button class="btn btn-option" id="Btn4">Option 4</button>
`
let openHTML = `
<input type="text" id="txtInput" placeholder="Placeholder">
`


let currentQuestion = 0;
let score = 0;

let questions = [
   {
        question: "Placeholder Question",
        open : false,
        answers: [
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false}
            ]
    },
    {
        question: "Placeholder Question",
        open : false,
        answers: [
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false}
        ]
    },
    {
        question: "Placeholder Question",
        open : false,
        answers: [
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false}
        ]
    },
    {
        question: "Placeholder Question",
        open : false,
        answers: [
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false}
        ]
    },
    {
        question: "Placeholder Question",
        open : false,
        answers: [
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false}
        ]
    },
    {
        question: "Placeholder Question",
        open : false,
        answers: [
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false}
        ]
    },
    {
        question: "Placeholder Question",
        open : false,
        answers: [
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false}
        ]
    },
    {
        question: "Placeholder Question",
        open : false,
        answers: [
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false}
        ]
    },
    {
        question: "Placeholder Question",
        open : false,
        answers: [
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false}
        ]
    },
    {
        question: "Placeholder Question",
        open : false,
        answers: [
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false},
            {option: "Placeholder Answer", answer: false}
        ]
    },
    {
        open : true,
        question: "Placeholder Question",
        answers: [
            "Placeholder Answer",
        ]
    },
    {
        open : true,
        question: "Placeholder Question",
        answers: [
            "Placeholder Answer",
        ]
    },
    {
        open : true,
        question: "Placeholder Question",
        answers: [
            "Placeholder Answer",
        ]
    },
    {
        open : true,
        question: "Placeholder Question",
        answers: [
            "Placeholder Answer",
        ]
    },
    {
        open : true,
        question: "Placeholder Question",
        answers: [
            "Placeholder Answer",
        ]
    },
]


restartBtn.addEventListener("click", restart);
nextBtn.addEventListener("click",function(){
    try{
        next()
    }
    catch{
        submit()
    }

});


function beginQuiz() {
    document.getElementById("options").innerHTML = multHTML;
    Btn1 = document.getElementById("Btn1");
    Btn2 = document.getElementById("Btn2");
    Btn3 = document.getElementById("Btn3");
    Btn4 = document.getElementById("Btn4");

    currentQuestion = 0;
    questionText.innerHTML = questions[currentQuestion].question;
    Btn1.innerHTML = questions[currentQuestion].answers[0].option;
    Btn2.innerHTML = questions[currentQuestion].answers[1].option;
    Btn3.innerHTML = questions[currentQuestion].answers[2].option;
    Btn4.innerHTML = questions[currentQuestion].answers[3].option;
    Btn1.onclick = () => {
        Btn1.style.backgroundColor = "var(--selected_color)";
        Btn2.style.backgroundColor = "var(--button_color)";
        Btn3.style.backgroundColor = "var(--button_color)";
        Btn4.style.backgroundColor = "var(--button_color)";
        if(questions[currentQuestion].answers[0].answer) {
            if(score < questions.length) {
                score++;
            }
        }
    }
    Btn2.onclick = () => {
        Btn1.style.backgroundColor = "var(--button_color)";
        Btn2.style.backgroundColor = "var(--selected_color)";
        Btn3.style.backgroundColor = "var(--button_color)";
        Btn4.style.backgroundColor = "var(--button_color)";
        if(questions[currentQuestion].answers[1].answer) {
            if(score < questions.length) {
                score++;
            }
        }
    }

    Btn3.onclick = () => {
        Btn1.style.backgroundColor = "var(--button_color)";
        Btn2.style.backgroundColor = "var(--button_color)";
        Btn3.style.backgroundColor = "var(--selected_color)";
        Btn4.style.backgroundColor = "var(--button_color)";
        if(questions[currentQuestion].answers[2].answer) {
            if(score < questions.length) {
                score++;
            }
        }
    }

    Btn4.onclick = () => {
        Btn1.style.backgroundColor = "var(--button_color)";
        Btn2.style.backgroundColor = "var(--button_color)";
        Btn3.style.backgroundColor = "var(--button_color)";
        Btn4.style.backgroundColor = "var(--selected_color)";
        if(questions[currentQuestion].answers[3].answer) {
            if(score < questions.length) {
                score++;
            }
        }
    }
 }
 
 beginQuiz();


 function restart() {
    currentQuestion = 0;
    nextBtn.classList.remove("hide");
    Btn1.classList.remove("hide");
    Btn2.classList.remove("hide");
    Btn3.classList.remove("hide");
    Btn4.classList.remove("hide");

    score = 0;
    beginQuiz();
 }

 function next() {
    if(openTrue) {
        score++;
    }
    openTrue = false;
    currentQuestion++;
    if (questions[currentQuestion].open){
        document.getElementById("options").dataset.type = "open"
        document.getElementById("options").innerHTML = openHTML;
        txtInput = document.getElementById('txtInput');
        txtInput.style.color = "var(--button_text_color)"
        questionText.innerHTML = questions[currentQuestion].question;
        document.getElementById("txtInput").addEventListener('change', function() {
            console.log("changed");
            if (txtInput.value.toLowerCase().includes(questions[currentQuestion].answers[0])){
                console.log("Kaas")
                openTrue = true;
            }
            else {
                openTrue = false;
            }
        });
        return;
    }
    Btn1.style.backgroundColor = "var(--button_color)";
    Btn2.style.backgroundColor = "var(--button_color)";
    Btn3.style.backgroundColor = "var(--button_color)";
    Btn4.style.backgroundColor = "var(--button_color)";

    if(currentQuestion >= questions.length - 1) {
        nextBtn.classList.remove("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    Btn1.innerHTML = questions[currentQuestion].answers[0].option;
    Btn1.onclick = () => {
        Btn1.style.backgroundColor = "var(--selected_color)";
        Btn2.style.backgroundColor = "var(--button_color)";
        Btn3.style.backgroundColor = "var(--button_color)";
        Btn4.style.backgroundColor = "var(--button_color)";
        if(questions[currentQuestion].answers[0].answer) {
            if(score < questions.length) {
                score++;
            }
        }
    }
 
    Btn2.innerHTML = questions[currentQuestion].answers[1].option;
    Btn2.onclick = () => {
        Btn1.style.backgroundColor = "var(--button_color)";
        Btn2.style.backgroundColor = "var(--selected_color)";
        Btn3.style.backgroundColor = "var(--button_color)";
        Btn4.style.backgroundColor = "var(--button_color)";
        if(questions[currentQuestion].answers[1].answer) {
            if(score < questions.length) {
                score++;
            }
 
        }
    }
    Btn3.innerHTML = questions[currentQuestion].answers[2].option;
    Btn3.onclick = () => {
        Btn1.style.backgroundColor = "var(--button_color)";
        Btn2.style.backgroundColor = "var(--button_color)";
        Btn3.style.backgroundColor = "var(--selected_color)";
        Btn4.style.backgroundColor = "var(--button_color)";
        if(questions[currentQuestion].answers[2].answer) {
            if(score < questions.length) {
                score++;
            }
 
        }
    }

    Btn4.innerHTML = questions[currentQuestion].answers[3].option;
    Btn4.onclick = () => {
        Btn1.style.backgroundColor = "var(--button_color)";
        Btn2.style.backgroundColor = "var(--button_color)";
        Btn3.style.backgroundColor = "var(--button_color)";
        Btn4.style.backgroundColor = "var(--selected_color)";
        if(questions[currentQuestion].answers[3].answer) {
            if(score < questions.length) {
                score++;
            }
 
        }
    }
 
 }


 function submit() {
    nextBtn.classList.add("hide");
    Btn1.classList.add("hide");
    Btn2.classList.add("hide");   
    Btn3.classList.add("hide");
    Btn4.classList.add("hide");   
    txtInput.classList.add("hide");   

    questionText.innerHTML ="Congratulations on submitting the Quiz! <br>"
    questionText.innerHTML += `Your score is ${score} / ${questions.length}`
 }





