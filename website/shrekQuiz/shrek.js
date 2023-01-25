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
        question: "Wie sprak de stem in van de ezel",
        answers: [
            {option: "Mike Myers", answer: false},
            {option: "Eddie Murphy", answer: true},
            {option: "Aron Warner", answer: false},
            {option: "Lucas van Briemen", answer: false},
        ]
    },
    {

        open : false,
        question: "Welke kleur is de huid van Shrek?",
        answers: [
            {option: "Zwart", answer: false},
            {option: "Oranje", answer: false},
            {option: "Groen", answer: true},
            {option: "Blauw", answer: false},
        ]
    },
    {

        open : false,
        question: "Hoeveel kinderen heeft Shrek",
        answers: [
            {option: "2", answer: false},
            {option: "3", answer: true},
            {option: "0", answer: false},
            {option: "5", answer: false},
        ]
    },
    {

        open : false,
        question: "Wanner speelt 'Shrek 2' zich af vergelekem met 'Shrek'?",
        answers: [
            {option: "Recht erna", answer: true},
            {option: "2 maanden later", answer: false},
            {option: "5 jaar later", answer: false},
            {option: "4 maanden later", answer: false},
        ]
    },
    {

        open : false,
        question: "Aan het begin van de film doet Shrek een ___ in zijn driken",
        answers: [
            {option: "oogbal", answer: true},
            {option: "ijsklontje", answer: false},
            {option: "banaan", answer: false},
            {option: "pluk haren", answer: false},
        ]
    },
    {

        open : false,
        question: "De prices zat opgeslote in een toren, bewaakt door een ____?",
        answers: [
            {option: "een Grote Boze Reus", answer: false},
            {option: "een Zombieleger", answer: false},
            {option: "Boze Lucas", answer: false},
            {option:  "een Vuurspuwende Draak", answer: true},
        ]
    },
    {

        open : false,
        question: "Waar woont shrek",
        answers: [
            {option: "Moeras", answer: true},
            {option: "Woestijn", answer: false},
            {option: "Bloemenveld", answer: false},
            {option: "Een achtertuin", answer: false},
        ]
    },
    {
        open : true,
        question: "Wat is de volledige naam van de bank, die het 1e liedje heeft gespeeld?",
        answers: [
            "smash mouth"
        ]
    },
    {
        open : true,
        question: "wat voor 'dier' is shrek? (antwoord in de englese term)",
        answers: [
            "ogre"
        ]
    },
    {
        open : true,
        question: "hoeveel baby's krijgt de ezel? (antwoord in een nummer)",
        answers: [
            "6"
        ]
    },
    {
        open : true,
        question: "Welke vorm is er gesneden in de deur, in de intro van de 1e film. (antwoord in een enkel woord)",
        answers: [
            "maan"
        ]
    },
    {
        open : true,
        question: "Wat voor 'vloeistof' gebruikt Shrek om te douchen in de intro scene. (antwoord in een enkel woord)",
        answers: [
            "modder"
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





