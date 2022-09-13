const questionData = [{
    "que": "1) What does HTML stand for:",
     "a": "HyperText Markup Language",
     "b": "HigherText Markup Language",
     "c": "Extensible Markup Language",
     "d": "HyperTransfer Multiple Language",
     "correct": "a",
    },

    {
     "que": "2) What does CSS stand for:",
      "a": "Canva Style Sheet",
      "b": "Cascading Style Sheet",
      "c": "Constructing Style Sheet",
      "d": "Content Style Sheet",
      "correct": "b",
    },

    {
        "que": "3) Which of these is not a programming language:",
         "a": "Python",
         "b": "JavaScript",
         "c": "XML",
         "d": "Java",
         "correct": "c",
    },

    {
        "que": "4) Which of these syntax is correct:",
         "a": "<h1 Hello World> </h1>",
         "b": "<h1> </Hello World h1>",
         "c": "<h1> Hello World </h1>",
         "d": " < Hello World h1> </h1>",
         "correct": "c",
    },

    {
        "que": "5)Which of these is not a markup language:",
         "a": "Html",
         "b": "Css",
         "c": "Xml",
         "d": "Php",
         "correct": "d",
    },

    {
        "que": "6) Which of these is false:",
         "a": "Xml for web database",
         "b": "Html for web skeleton",
         "c": "JavaScript for web behaviour",
         "d": "Css for styling web-pages",
         "correct": "b",
    },

    {
        "que": "7) Major function of css media queries is for:",
         "a": "Components",
         "b": "Composability",
         "c": "Responsiveness",
         "d": "Fuctionality",
         "correct": "c",
    }



];
console.log("Hello wirld");

const answerEls = document.querySelectorAll(".answer");
const question = document.querySelector(".question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btn = document.getElementById("btn");
let quiz = document.querySelector(".box");


let index = 0;

/*This score is the one not increamenting, check the last code at the bottom*/  let score = 0;




loadQuiz();

function loadQuiz() {
    
    deselectAnswers();
    const quizData = questionData[index];
    question.innerText = quizData.que;
    a_text.innerText = quizData.a;
    b_text.innerText = quizData.b;
    c_text.innerText = quizData.c;
    d_text.innerText = quizData.d;

}

function getSelected(){
    let answer;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
         answer =  answerEl.id;
        }
    });

    return answer;
};

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

btn.addEventListener("click",() => {
    const answer = getSelected();
    console.log(questionData[index].correct);
      if (answer){
            if(answer === questionData[index].correct) {
                  score++;
            }

               index++;

              if(index < questionData.length){
                loadQuiz();
              }
               else{
           quiz.innerHTML = `<div style = "text-align: center">
           <h2>U answered ${score}/${questionData.length} correctly </h2>
           </div>
           <button onclick = "location.reload()">Reload</button>`
        }
    
   }
  
});

 