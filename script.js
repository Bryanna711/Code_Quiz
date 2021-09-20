var timeElement = document.querySelector(".timer");
var startButton = document.querySelector("#startButton");

var answerA1 =document.querySelector ("#question1 .a");
var answerB1 =document.querySelector ("#question1 .b");
var answerC1 = document.querySelector ("#question1 .c");
var answerA2 =document.querySelector ("#question2 .a");
var answerB2 =document.querySelector ("#question2 .b");
var answerC2 = document.querySelector ("#question2 .c");
var answerA3 =document.querySelector ("#question3 .a");
var answerB3 =document.querySelector ("#question3 .b");
var answerC3 = document.querySelector ("#question3 .c");
var answerA4 =document.querySelector ("#question4 .a");
var answerB4 =document.querySelector ("#question4 .b");
var answerC4 = document.querySelector ("#question4 .c");
var answerA5 =document.querySelector ("#question5 .a");
var answerB5 =document.querySelector ("#question5 .b");
var answerC5 = document.querySelector ("#question5 .c");
var answerA6 =document.querySelector ("#question6 .a");
var answerB6 =document.querySelector ("#question6 .b");
var answerC6 = document.querySelector ("#question6 .c");

var submitBtn = document.querySelector("#submitBtn");

var scoresList= document.querySelector("#scores");

var hScores= [];


console.log(timeElement)
console.log(startButton)

function renderScores(){

    scoresList.innerHTML= "";

    for(var i=0; i<hScores; i++){
    var hScores = hScores[i];

    var li = document.createElement("li");
    li.textContent =hScores;
    li.setAttribute("data", i);

    scoresList.appendChild(li);
    }
}

startButton.addEventListener("click",function() {
    function startQuiz(){
        document.getElementById("landing").style.display="none";
        document.getElementById("question1").style.display="block";
     }
     startQuiz();
     countDown();
     });


    var secondsLeft = 61;

function countDown() {
    var timeInterval = setInterval(function(){
        secondsLeft--;
        timeElement.textContent = secondsLeft + " seconds left!";

        if(secondsLeft === 0) {
            clearInterval(timeInterval);
            //you lose msg?
        }
        function stopTimer(){
            clearInterval(timeInterval)
        }
    }, 1000);

} 


answerA1.addEventListener("click", function(){
    
    function changeQuestion(){
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display ="block";
        }
        changeQuestion();
    });
    
answerB1.addEventListener("click", function(){

    function changeQuestion(){
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display ="block";
        }
        changeQuestion();
    function wrongAnswer(){
        secondsLeft = secondsLeft - 10;
    }
    wrongAnswer();
     });
       
answerC1.addEventListener("click", function(){

    function changeQuestion(){
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display ="block";
        }
        changeQuestion();    
    function wrongAnswer(){
        secondsLeft = secondsLeft - 10;
    }
    wrongAnswer();
    });
    
answerA2.addEventListener("click", function(){
    
        function changeQuestion(){
            document.getElementById("question2").style.display = "none";
            document.getElementById("question3").style.display ="block";
            }
            changeQuestion();
        });
         
answerB2.addEventListener("click", function(){

    function changeQuestion(){
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display ="block";
        }
        changeQuestion();
    function wrongAnswer(){
        secondsLeft = secondsLeft - 10;
    }
    wrongAnswer();  

    });
    
    
answerC2.addEventListener("click", function(){

    function changeQuestion(){
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display ="block";
        }
        changeQuestion();
    function wrongAnswer(){
        secondsLeft = secondsLeft - 10;
    }
    wrongAnswer();

        });

answerA3.addEventListener("click", function(){

    function changeQuestion(){
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display ="block";
        }
        changeQuestion();
    });    
    
answerB3.addEventListener("click", function(){

    function changeQuestion(){
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display ="block";
        }
        changeQuestion();
    function wrongAnswer(){
        secondsLeft = secondsLeft - 10;
    }
    wrongAnswer(); 

    });
        
answerC3.addEventListener("click", function(){

    function changeQuestion(){
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display ="block";
        }
        changeQuestion();
    function wrongAnswer(){
        secondsLeft = secondsLeft - 10;
    }
    wrongAnswer();
        });

answerA4.addEventListener("click", function(){

    function changeQuestion(){
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display ="block";
        }
        changeQuestion();
    });
    
answerB4.addEventListener("click", function(){

    function changeQuestion(){
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display ="block";
        }
        changeQuestion();
    function wrongAnswer(){
        secondsLeft = secondsLeft - 10;
    }
    wrongAnswer();  

    });   
    
answerC4.addEventListener("click", function(){

    function changeQuestion(){
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display ="block";
        }
        changeQuestion();
    function wrongAnswer(){
        secondsLeft = secondsLeft - 10;
    }
    wrongAnswer();

        });

answerA5.addEventListener("click", function(){

        function changeQuestion(){
            document.getElementById("question5").style.display = "none";
            document.getElementById("question6").style.display ="block";
            }
            changeQuestion();
        });             
        
answerB5.addEventListener("click", function(){

    function changeQuestion(){
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display ="block";
        }
        changeQuestion();
    function wrongAnswer(){
        secondsLeft = secondsLeft - 10;
    }
    wrongAnswer();
    });
            
answerC5.addEventListener("click", function(){

    function changeQuestion(){
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display ="block";
        }
        changeQuestion();
    function wrongAnswer(){
        secondsLeft = secondsLeft - 10;
    }
    wrongAnswer();
    });

answerA6.addEventListener("click", function(){

    function endQuiz(){
        document.getElementById("question6").style.display = "none";
        document.getElementById("submit").style.display ="block";
        }
        endQuiz();
    });             
    
answerB6.addEventListener("click", function(){

    function endQuiz(){
        document.getElementById("question6").style.display = "none";
        document.getElementById("submit").style.display ="block";
        }
        endQuiz();
    function wrongAnswer(){
        secondsLeft = secondsLeft - 10;
    }
    wrongAnswer(); 

    });
            
answerC6.addEventListener("click", function(){

    function endQuiz(){
        document.getElementById("question6").style.display = "none";
        document.getElementById("submit").style.display ="block";
        }
        endQuiz();
    function wrongAnswer(){
        secondsLeft = secondsLeft - 10;
    }
    wrongAnswer();
        });

submitBtn.addEventListener("click", function(){
    function submitScore(){
    document.getElementById("submit").style.display ="none";
    document.getElementById("highScore").style.display ="block";
    }
    submitScore();
});





//I need to store the content of the "name" page along with the timer
//a,b,c buttons on question 6 also need to stop the timer. These may all need to coded differently.
       // First either deduct time or not, then stop timer, then hide content/show content

       //Show/Hide Fuction will be conditional if question1 is visible, then question 1 becomes hidden and question 2 beccomes visible, etc....
        //do I need data-tags for this?