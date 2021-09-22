var timeElement = document.querySelector(".timer");
var startButton = document.querySelector("#startButton");
var highScoreBtn = document.querySelector("#highScoreBtn");
var returnBtn = document.querySelector("#returnBtn")
var resetBtn = document.querySelector("#resetTimer");

var answerA1 =document.querySelector ("#question1 .a");
var answerB1 =document.querySelector ("#question1 .b");
var answerC1 = document.querySelector ("#question1 .c");
var answerA2 =document.querySelector ("#question2 .a");
var answerB2 =document.querySelector ("#question2 .b");
var answerC2 =document.querySelector ("#question2 .c");
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

var scoresList= document.querySelector("#scoresList");
var scoreForm = document.querySelector("#userNameForm");
var userNameInput = document.querySelector("#userName");

var hScores= [];
var userName= [];


console.log(timeElement)
console.log(startButton)


startButton.addEventListener("click",function() {
    function startQuiz(){
        document.getElementById("landing").style.display="none";
        document.getElementById("question1").style.display="block";
     }
     startQuiz();
     countDown();
});
    

    var secondsLeft = 59;
    var timeInterval = -1;
    function countDown() {
            timeInterval = setInterval(function(){
            secondsLeft--;
            timeElement.textContent = secondsLeft + " seconds left!";

            if(secondsLeft === 0) {
                clearInterval(timeInterval);
            }
            
        }, 1000);
    }

    function stopTimer(){
        clearInterval(timeInterval);
        timeInterval = -1;
    }

resetBtn.addEventListener("click", function(){
    if(secondsLeft< 60){
    secondsLeft = secondsLeft+(60-secondsLeft);
    countDown();}
  
})
    

highScoreBtn.addEventListener("click", function(){
    document.getElementById("landing").style.display = "none";
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "none";
    document.getElementById("question6").style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.getElementById("highScore").style.display = "block";
    stopTimer();
   
})

returnBtn.addEventListener("click", function(){
    document.getElementById("landing").style.display = "block";
    document.getElementById("highScore").style.display = "none";
   
})

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
        stopTimer();
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
    stopTimer();

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
    stopTimer();
        });

submitBtn.addEventListener("click", function(){
    function submitScore(){
    document.getElementById("submit").style.display ="none";
    document.getElementById("highScore").style.display ="block";
    }

    submitScore();

    var hScoreText = userNameInput.value + " - " + secondsLeft;
    if (hScoreText === "") {
        return;
    }
    hScores.push(hScoreText);
    userNameInput.value ="";
    
    storeScores();
    renderScores();
});

function renderScores(){
    scoresList.innerHTML= "";
    for(var i=0; i<hScores.length; i++){
    var hScore = hScores[i];
    var li = document.createElement("li");
    li.textContent = hScore;
    li.setAttribute("data-index", i);
    scoresList.appendChild(li);
    }

    var storedScores = JSON.parse(localStorage.getItem("hScores"));
    var storedScores = (localStorage.getItem("hScores"));

    if(storedScores !== null){
        hScores = storedScores;
    }
    renderScores();
}

function storeScores(){
    localStorage.setItem("hScores", JSON.stringify(hScores));
    localStorage.setItem("hScores",(hScores));
};

/*var scoresList= document.querySelector("#scoresList");
var scoreForm = document.querySelector("#userNameForm");
var userNameInput = document.querySelector("#userName");

var hScores= [];
var userName= [];
        
    var hScoreText ="";

    if (hScoreText === "") {
        return;
    }

    hScoreText = secondsLeft;
    hScores.push(hScoreText);
    
    userName.push(userNameInput)

    storeScores();
    renderScores();
});

function renderScores(){

    scoresList.innerHTML= "";

    for(var i=0; i<hScores.length; i++){
    var hScores = hScores[i];
    var userNameInput = userNameInput[i]; {
        scoresListText += userNameInput[i] + "," + hScores[i] + "\n";
    }

    var li = document.createElement("li");
    li.textContent = scoresListText;
    li.setAttribute("data-index", i);

    scoresList.appendChild(li);
    }

    var storedScores = JSON.parse(localStorage.getItem("hScoresList"));

    if(storedScores !== null){
        scoresList = storedScores;
    }
    renderScores();
}

function storeScores(){
    localStorage.setItem("hScoresList",JSON.stringify(scoresList));
};*/
