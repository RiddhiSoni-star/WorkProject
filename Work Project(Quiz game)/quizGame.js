const questions = [
    {
        'que': "What does HTML stand for?",
         'a':"HyperText Markup Languages",
         'b':"Hyper Transfer Markup Languages",
         'c':"HyperText Machine Languages",
         'd':"None",
         'correct':"a",
         
    },
    {
        'que': "Which tag is used to define an unordered list in HTML?",
         
        'a': "<ul>" ,
        'b': "<ol>",
        'c':  "'<li>", 
        'd':  "<list>" ,
        'correct':"a",
        
    },
{
    'que': "What does the <a> tag in HTML define?",
         
            'a':  "An image",
            'b':  "A hyperlink",
            'c':  "A table",
            'd': "A heading",
        correct:"b",  
    },

    {
        'que': ".Which tag is used to display an image in HTML?",
        
             'a': "<picture>",
             'b':"<img>",
             'c':"<image>",
             'd':"<src>",
        correct:"b"   , 
    },

    {
        'que':"Which of the following tags is used to create a form in HTML?",
         
            'a': "<form>",
            'b':"<input>",
            'c':"<submit>",
            'd':"<label>",
            correct:"a",
    } 
]

let index =0;
 let total=questions.length;
 let right =0 ;
 let wrong =0 ;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset();
const data = questions[index]
console.log(data)
quesBox.innerText =  `${index+1})${data.que}`;
optionInputs[0].nextElementSibling.innerText = data.a;
optionInputs[1].nextElementSibling.innerText = data.b; 
optionInputs[2].nextElementSibling.innerText = data.c; 
optionInputs[3].nextElementSibling.innerText = data.d; 

}
const submitQuiz =() =>{
    const data = questions[index];

    const ans = getAnswer()
    console.log(ans,data.correct)
    if(ans == data.correct){
right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
 return;
}

const getAnswer = () =>{
    let answer;
      optionInputs.forEach(
        (input) => {
            if(input.checked) {
              answer= input.value ;
            }
        }
      
    )
    return answer;
}
const reset = () => {
    optionInputs.forEach(
        (input) => {
        input.checked = false;       
        } 
    )
}


const endQuiz = () =>{
    document.getElementById("box").innerHTML = `
    <h3>THANK YOU FOR PLAYING THE QUIZ.  </h3>
    <h3>Now its time for your score </h3>
    <h2> You got ${right}/${total} are correct</h2>`
}
function triggerConfetti() {
     
    confetti({
      particleCount: 100,       // Number of confetti particles
      spread: 70,               // How widely the confetti will spread
      origin: { x: 0.5, y: 0.5 } // The starting point (center of the screen)
    });
   
}
let timeLeft = 15; // Set countdown start time
    const timerDisplay = document.getElementById("timer");

    // Function to update the timer every second
    const countdown = setInterval(function() {
      timeLeft--;
      timerDisplay.textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(countdown); // Stop the timer when it reaches 0
        alert("Time's up!");
      }
    }, 1000); // Update
// inital call
loadQuestion();
