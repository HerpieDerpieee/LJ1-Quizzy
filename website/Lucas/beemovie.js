const restartBtn = document.getElementById("restart");
const nextBtn = document.getElementById("next");
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
<input type="text" id="txtInput" placeholder="Placeholder">
`


let currentQuestion = 0;
let score = 0;

let questions = [
   {
        //1
        question: "Waneer kwam de bee movie uit?",
        open : false,
        answers: [
            {option: "2001", answer: false},
            {option: "2000", answer: false},
            {option: "2007", answer: true},
            {option: "1999", answer: false},
        ]
   },
   {
        //2
        open : false,
        question: "Wat is de naam van de hoofdpersoon?",
        answers: [
            {option: "leo", answer: false},
            {option: "barry", answer: true},
            {option: "Frank", answer: false},
            {option: "Bart", answer: false},
        ]
   },
   {
        //3
        open : false,
        question: "Hoe heeft de vrouw waar barry mee omgaat",
        answers: [
            {option: "fiene", answer: false},
            {option: "Gonny", answer: false},
            {option: "Vanessa", answer: true},
            {option: "bob", answer: false},
        ]
   },
   {
        //4
        open : false,
        question: "Wie sprak de stem in van de bij",
        answers: [
            {option: "Mike Myers", answer: false},
            {option: "Jerry", answer: true},
            {option: "Aron Warner", answer: false},
            {option: "Lucas van Briemen", answer: true},
        ]
    },
    {
        //5
        open : false,
        question: "Welke kleur hebben bijen?",
        answers: [
            {option: "Zwart met geel", answer: true},
            {option: "Oranje", answer: false},
            {option: "Groen", answer: false},
            {option: "Paars", answer: false},
        ]
    },
    {
        //6
        open : false,
        question: "Hoeveel kinderen heeft barry?",
        answers: [
            {option: "2", answer: false},
            {option: "3", answer: false},
            {option: "0", answer: true},
            {option: "5", answer: false},
        ]
    },
    {
        //7
        open : false,
        question: "Wat is het antwoord op 'You like jazz?'?",
        answers: [
            {option: "no", answer: false},
            {option: "yes", answer: false},
            {option: "maby", answer: false},
            {option: "No, that's no good.", answer: true},
        ]
    },
    {
        //8
        open : false,
        question: "In de film wordt Barry geslagen door een ___bal",
        answers: [
            {option: "oog", answer: false},
            {option: "voet", answer: false},
            {option: "tennis", answer: true},
            {option: "teel", answer: false},
        ]
    },
    {
        //9
        open : false,
        question: "wat is het antwoord op: 'What was it like to sting someone?'",
        answers: [
            {option: "pain", answer: false},
            {option: "good", answer: false},
            {option: "IDK, but you like jazz", answer: false},
            {option: "I can't explain it. It was all...", answer: true},
        ]
    },
    {
        //10
        open : false,
        question: "wat eten bijen?",
        answers: [
            {option: "andere bijen", answer: true},
            {option: "Honing", answer: false},
            {option: "Bloemen", answer: true},
            {option: "vlees", answer: false},
        ]
    },
    {
        //11
        open : true,
        question: "Dieren bestaan uit DNA ook barry uit de film, wat is voledige naam van DNA?",
        answers: [
            "desoxyribonucleïnezuur"
        ]
    },
    {
        //12
        open : true,
        question: "wat is de latijnse naam voor barry?",
        answers: [
            "antophila"
        ]
    },
    {
        //13
        open : true,
        question: "Hoe oud is barry",
        answers: [
            "6+"
        ]
    },
    {
        //14
        open : true,
        question: "waar leven bijen in?",
        answers: [
            "bijenkorf"
        ]
    },
    {
        //15
        open : true,
        question: "Hoelang is de film (in seconden)",
        answers: [
            "5460"
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





