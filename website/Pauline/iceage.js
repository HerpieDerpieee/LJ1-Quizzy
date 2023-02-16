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
        question: "Hoeveel Ice Age films zijn er in totaal",
        open : false,
        answers: [
            {option: "3", answer: false},
            {option: "4", answer: false},
            {option: "5", answer: true},
            {option: "7", answer: false}
            ]
    },
    {
        question: "welke Ice Age film bevat mensen",
        open : false,
        answers: [
            {option: "Ice Age ", answer: true},
            {option: "Ice Age the meltdown", answer: false},
            {option: "Ice Age continental drift", answer: false},
            {option: "Ice Age collision course", answer: false}
        ]
    },
    {
        question: "De grote mammoet word in alle films 'Manny' genoemd maar wat is zijn echte naam?",
        open : false,
        answers: [
            {option: "Manfred", answer: true},
            {option: "Manuel", answer: false},
            {option: "Manchester", answer: false},
            {option: "Marinus", answer: false}
        ]
    },
    {
        question: "Wat doet de eekhoorn in elke film?",
        open : false,
        answers: [
            {option: "Zwemmen", answer: false},
            {option: "De wereld ontdekken", answer: false},
            {option: "Achter een eikel aanrennen", answer: true},
            {option: "niks. hij slaapt alleen maar", answer: false}
        ]
    },
    {
        question: "Hoe heet Manny en Ellie's dochter?",
        open : false,
        answers: [
            {option: "de dochter heeft geen naam", answer: false},
            {option: "Emma", answer: false},
            {option: "Peaches", answer: true},
            {option: "Johanna", answer: false}
        ]
    },
    {
        question: "Hoe heet de luiaard in de films",
        open : false,
        answers: [
            {option: "Margot", answer: false},
            {option: "Sid", answer: true},
            {option: "Henk", answer: false},
            {option: "Opa Kurt", answer: false}
        ]
    },
    {
        question: "Wie zei 'ik eet geen junkfood'?",
        open : false,
        answers: [
            {option: "Manny", answer: false},
            {option: "Die ene eekhoorn", answer: false},
            {option: "Peaches", answer: false},
            {option: "Diego", answer: true}
        ]
    },
    {
        question: "Wie voorspelde de overstroming?",
        open : false,
        answers: [
            {option: "Fast Tony", answer: true},
            {option: "Peaches", answer: false},
            {option: "Henk", answer: false},
            {option: "Opa Kurt", answer: false}
        ]
    },
    {
        question: "Wat is Sids bijnaam die hij aan zichzelf heeft gegeven?",
        open : false,
        answers: [
            {option: "gewoon sid", answer: false},
            {option: "Sid the lord of the flame", answer: true},
            {option: "gore luiwammes", answer: false},
            {option: "sid the explorer", answer: false}
        ]
    },
    {
        question: "welke angst van Diego zei Sid dat hij wist?",
        open : false,
        answers: [
            {option: "Vissen", answer: false},
            {option: "Hoogtes", answer: false},
            {option: "Vuur", answer: false},
            {option: "Water", answer: true}
        ]
    },
    {
        open : true,
        question: "Welk dier dacht Ellie dat ze was?",
        answers: [
            "Buidelrat",
            "een buidelrat"
        ]
    },
    {
        open : true,
        question: "Welke Ice Age film is het leukst",
        answer : true
    },
    {
        open : true,
        question: "Wat wouden de andere luiaarden doen met Sid?",
        answers: [
            "hem opofferen",
            "opofferen"
        ]
    },
    {
        open : true,
        question: "Wat is de naam van de animatie studio die Ice Age heeft gemaakt?",
        answers: [
            "Blue Sky",
        ]
    },
    {
        open : true,
        question: "Wat zei Manny dat het meest aantrekkelijke was van Ellie?",
        answers: [
            "Haar billen",
            "Haar reet",
            "Haar ass"
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





