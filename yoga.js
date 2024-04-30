//Selected all buttons:
let myButtons = document.querySelectorAll("button");
    

//Select my score element
let scoreElement = document.querySelector(".score-element");

console.log(scoreElement);

//Create score tracker variable
let score = 0;


function disableButtons(question){

    let currentButtons = question.querySelectorAll("button");

    //For each button
    for (let button of currentButtons ){
        //  Disable it
        button.disabled = true;
    } 
}

// Define instructions to check answer
function checkAnswer(event) {
//Find clicked button, by looking into event details
    let button = event.target;
    let question = button.parentElement;

    
    
// Get boolean (true or false) if <button> has class "correct" or not
    let isCorrect = button.classList.contains("correct");

    button.classList.add("clicked"); //makes turn red green or rotate

    //Check if answer is correct
if (isCorrect) {
    score++; //Adds one to score
    scoreElement.innerText = score;
    //Show success message, now the button turns green
    /*button.style.background = "green"; */
} else {
    //Show error message, now the button turns red
    /*button.style.background = "red"; */

}

disableButtons(question) //You want to disable other choices, regardless of correctness 
}


//For each button
for (let button of myButtons){
    //when clicked, checkAnswer
    button.onclick = checkAnswer;
    
    
}