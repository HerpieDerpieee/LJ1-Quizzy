const restartBtn = document.getElementById("restart");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
let Btn1;
let Btn2;
let Btn3;
let Btn4;
let txtInput;
const questionText = document.getElementById("question-text");

let multHTML = `
<button class="btn btn-option" id="Btn1">Option 1</button>
<button class="btn btn-option" id="Btn2">Option 2</button>
<button class="btn btn-option" id="Btn3">Option 3</button>
<button class="btn btn-option" id="Btn4">Option 4</button>
`
let openHTML = `
<input type="text" id="txtInput">
`

let currentQuestion = 0;
let score = 0;

let questions = [
   {
        question: "In welk jaar is de 1e shrek film uitgekomen? (in nederland)",
        open : false,
        answers: [
            {option: "2001", answer: true},
            {option: "2000", answer: false},
            {option: "2006", answer: false},
            {option: "1999", answer: false},
        ]
   },
   {
        open : false,
        question: "Hoeveel shrek films zijn er?",
        answers: [
            {option: "3", answer: false},
            {option: "4", answer: true},
            {option: "5", answer: false},
            {option: "20", answer: false},
        ]
   },
   {

        open : false,
        question: "Hoe heeft de 'vrouw' waar shrek mee trouwt?",
        answers: [
            {option: "fiene", answer: false},
            {option: "sheniqua", answer: false},
            {option: "fiona", answer: true},
            {option: "bob", answer: false},
        ]
   },
   {

        open : false,
        question: "wat is 1+1",
        answers: [
            {option: "1", answer: false},
            {option: "21", answer: false},
            {option: "2", answer: true},
            {option: "900", answer: false},
        ]
    },
    {

        open : false,
        question: "wat is 1+2",
        answers: [
            {option: "1", answer: false},
            {option: "21", answer: false},
            {option: "3", answer: true},
            {option: "900", answer: false},
        ]
    },
    {

        open : false,
        question: "wat is 1+3",
        answers: [
            {option: "1", answer: false},
            {option: "21", answer: false},
            {option: "4", answer: true},
            {option: "900", answer: false},
        ]
    },
    {

        open : false,
        question: "wat is 1+4",
        answers: [
            {option: "5", answer: true},
            {option: "21", answer: false},
            {option: "1", answer: false},
            {option: "900", answer: false},
        ]
    },
    {

        open : false,
        question: "wat is 1+5",
        answers: [
            {option: "1", answer: false},
            {option: "6", answer: true},
            {option: "2", answer: false},
            {option: "900", answer: false},
        ]
    },
    {

        open : false,
        question: "wat is 1+6",
        answers: [
            {option: "1", answer: false},
            {option: "21", answer: false},
            {option: "7", answer: true},
            {option: "900", answer: false},
        ]
    },
    {

        open : false,
        question: "wat is 1+7",
        answers: [
            {option: "1", answer: false},
            {option: "21", answer: false},
            {option: "2", answer: false},
            {option: "8", answer: true},
        ]
    },
    {
        open : true,
        question: "typ: `Banaan`",
        answers: [
            "banaan"
        ]
    },
    {
        open : true,
        question: "typ: `frikandel`",
        answers: [
            "frikandel"
        ]
    },
    {
        open : true,
        question: "typ: `tomaat`",
        answers: [
            "tomaat"
        ]
    },
    {
        open : true,
        question: "typ: `banaantje`",
        answers: [
            "banaantje"
        ]
    },
    {
        open : true,
        question: "typ: `shrek`",
        answers: [
            "shrek"
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
submitBtn.addEventListener("click",submit);


function beginQuiz() {
    document.getElementById("options").innerHTML = multHTML;
    Btn1 = document.getElementById("Btn1");
    Btn2 = document.getElementById("Btn2");
    Btn3 = document.getElementById("Btn3");
    Btn4 = document.getElementById("Btn4");
    submitBtn.classList.add("hide");

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
    submitBtn.classList.add("hide");
    Btn1.classList.remove("hide");
    Btn2.classList.remove("hide");
    Btn3.classList.remove("hide");
    Btn4.classList.remove("hide");

    score = 0;
    beginQuiz();
 }

 function next() {
    currentQuestion++;
    if (questions[currentQuestion].open){
        document.getElementById("options").innerHTML = openHTML;
        txtInput = document.getElementById('txtInput');
        questionText.innerHTML = questions[currentQuestion].question;
        document.getElementById("txtInput").addEventListener('change', function() {
            console.log("changed");
            if (txtInput.value.toString().toLowerCase() == questions[currentQuestion].answers[0]){
                console.log("Kaas")
                score++;
            }
        });
        return;
    }
    Btn1.style.backgroundColor = "var(--button_color)";
    Btn2.style.backgroundColor = "var(--button_color)";
    Btn3.style.backgroundColor = "var(--button_color)";
    Btn4.style.backgroundColor = "var(--button_color)";

    if(currentQuestion >= questions.length - 1) {
        nextBtn.classList.add("hide");
        submitBtn.classList.remove("hide");
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
    submitBtn.classList.add("hide");
    Btn1.classList.add("hide");
    Btn2.classList.add("hide");   
    Btn3.classList.add("hide");
    Btn4.classList.add("hide");   
    txtInput.classList.add("hide");   

    questionText.innerHTML ="Congratulations on submitting the Quiz! <br>"
    questionText.innerHTML += `Your score is ${score} / ${questions.length}`
 }





