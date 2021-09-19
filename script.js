var timeElement = document.querySelector(".timer");
var startButton = document.querySelector("#startButton");
var answerbtn = document.querySelector("#submitanswer");
console.log(timeElement)
console.log(startButton)



startButton.addEventListener("click",function() {

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

var answerbtn = document.querySelector("#submitanswer")
answerbtn.addEventListener("click", changeQuestion);
    
function changeQuestion(){

    var question = document.getElementById ("question");
    var answer1 = document.getElementById("skin1");
    var answer2 = document.getElementById ("muscle1");
    var answer3 = document.getElementById("skeleton1");

    if(question.innerText === "What is HTML known as when comparing it to the human body?") {
        question.innerText ==="What is CSS know as when comparing it to the human body?";
        
    }
    else if(question.innerHTML ==="What is CSS know as when comparing it to the human body?") {
        question.innerHTML === "The special character denoting an id in CSS is:";
    }

    else if(question.innerHTML === "The special character denoting an id in CSS is:") {
        question.innerHTML === "GitLab, GitHub, and GitBash are all owned by the same company:";
    }
    
    else if (question.innerHTML === "GitLab, GitHub, and GitBash are all owned by the same company:"){
    question.innerHTML === "An Array uses which special characters? ";
    }

    else if (question.innerHTML === "An Array uses which special characters? ") {
        question.innerHTML === "What occupies the innermost box in the box model?";
    }

    if (answer1.innerHTML==="Skin") {
        answer1.innerHTML ==="Skeleton";
    }

    else if (innerHTML === "Skeleton") {
        answer1.innerHTML === "%";
    }

    else if ( innerHTML === "%") {
        answer1.innerHTML === "I don't know";
    }

    else if (innerHTML === "I don't know") {
        answer1.innerHTML === " ( ) ";
    }

    else if(innerHTML === " ( ) ") {
        answer1.innerHTML === "Border"
    }

    
    if (answer2.innerHTML === "Muscle") {
        answer2.innerHTML === "Muscle";
    }

    else if(answer2.innerHTML === "Muscle") {
        answer2.innerHTML === " . ";

    }
    
    else if (answer2.innerHTML === " . ") {
        answer2.innerHTML === "True";
    }

    else if(answer2.innerHTML === "True") {
        answer2.innerHTML === " { } ";
    }

    else if(answer2.innerHTML === " { } ") {
        amswer2.innerHTML === "Padding";
    }

    if(answer3.innerHTML === "Skeleton") {
        answer3.innerHTML === "Skin";
    }

    else if(answer3.innerHTML === "Skin") {
        answer3.innerHTML ===" # ";
    }

    else if( answer3.innerHTML ===" # ") {
        answer3.innerHTML === "False";
    }

    else if( answer3.innerHTML === "False") {
        answer3.innerHTML === " [ ] "
    }

    else if( answer3.innerHTML ===" [ ] ") {
        answer3.innerHTML === "Content";
    }
}