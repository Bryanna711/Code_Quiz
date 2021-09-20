var timeElement = document.querySelector(".timer");
var startButton = document.querySelector("#startButton");
var answerA =document.querySelector (".a");
var answerB =document.querySelector (".b");
var answerC = document.querySelector (".c");

answerC= false;
answerB= false;
answerA= true;



console.log(timeElement)
console.log(startButton)


startButton.addEventListener("click",function(event) {
event.preventDefault;

//I need this button to also hide this content and show the next content

var secondsLeft = 61;

function countDown() {
    var timeInterval = setInterval(function(){
        secondsLeft--;
        timeElement.textContent = secondsLeft + " seconds left!";

        if(secondsLeft === 0) {
            clearInterval(timeInterval);
        }

    }, 1000);
} 

countDown();

})

answerA.addEventListener("click", function(event){
    event.preventDefault;
    // function to hide content and show content
    // answerA will never affect the countdown
    });
    
    answerB.addEventListener("click", function(event){
     // function to hide content and show content
     // function to subtract 10 from the timer
     event.preventDefault;   
        clearInterval(timeInterval);
        secondsLeft = (secondsLeft - 10);
        timeElement.textContent = secondsLeft + " seconds left!";
    });
    
    
    answerC.addEventListener("click", function(event){
        event.preventDefault;
    // function to hide content and show content
    // function to subtract 10 from the timer
        clearInterval(timeInterval);
        secondsLeft = (secondsLeft - 10);
        timeElement.textContent = secondsLeft + " seconds left!";
       });

