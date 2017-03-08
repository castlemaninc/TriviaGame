
// Trivia Game 

var questionArr = ["#question1","#question2","#question3","#question4","#question5", "#question6", "#question7", "#question8", "#question9", "#question10"];
var questionName = ["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10"];


var startTimer;
var questionCount = 0;
var time = 30;
var answer;
var correct = 0;
var incorrect = 0;


// new game function starts a new game
function newGame(){
    // hide all of the questions 
    hideQuestions();
    // if game over message is showing..
    if(!$("#gameOver").hasClass("hidden")){
        //  hide it by adding the class hidden
        $("#gameOver").addClass("hidden");
    }
    // if score message is showing ...
    if(!$("score").hasClass("hidden")){
        //hide it by adding the class hidden
        $("#score").addClass("hidden");
    }

    if(!$("#platos_academy").hasClass("hidden")){
        //hide it by adding the class hidden
        $("#platos_academy").addClass("hidden");
    }
    // set all radio buttons to unchecked 
    $("input[type=radio]").prop('checked', false);

    //reset question count to 0
    questionCount = 0;

    // reset number correct and incorrect to 0
    correct = 0;
    incorrect = 0;

    //reset time remaining to 30
    time = 30;

    //display the first question in the question array 
    $(questionArr[0]).show();
    
    //initiates the setInterval function called game
    game();
    
}

// resets the timer
function newTimer(){
	time = 30;

}

// hides the questions 
function hideQuestions(){    
    $(".questions").hide();    
}


// game function set for 1 second intervals
function game() { startTimer = setInterval(function(){ 
    	
        // every 1000 milliseconds decrement time variable by 1 
    	time--;
              
        // if the 30 second timer runs out... 

    	if (time>=0 && time<31){
    		console.log(time);
    		//display time left in the digits span element
    		$("#digits").html(time);

    	} else if (time===-1) {
            // If time runs out...
    		console.log("Time's up!");
    		// hide the question
            $(questionArr[questionCount]).hide();

            //increase incorrect total by 1
            incorrect++;

            // increase questionCount by 1
    		questionCount++;
            console.log("You have finished " + questionCount + " out of " + questionArr.length +" questions")

            // show next question    
    		$(questionArr[questionCount]).show();

    		// display Time's Up
    		$("#timeup").removeClass("hidden");

    		// restart timer after 3 seconds by calling newTimer function
    		setTimeout(function(){ 
                //reset the timer before the next question
    			newTimer();
    			//re-hide Time's Up message
    			$("#timeup").addClass("hidden");
    		}, 3000);

    	} else if (questionCount===questionArr.length){
            // if the timer runs out on the last question...
            console.log("Game Over");
            // display Game Over message 
            $("#gameOver").removeClass("hidden");
            // stop the timer 
            stopTimer();
            return;                        
        } 

        // conditional statements based on user activity

        // get the value of the chosen answer (the radio button that is checked)        
        answer = $("input[type=radio][name=" + questionName[questionCount] + "]:checked").val();
          
        if (answer === "correct"){
            console.log("The answer is correct");
            // increase correct answers total 
            correct++;
            
            // hide the question
            $(questionArr[questionCount]).hide();

            // increase questionCount by 1
            questionCount++;
            console.log("You have finished " + questionCount + " out of " + questionArr.length +" questions")

            // // show next question    
            // $(questionArr[questionCount]).show();

            console.log("Correct:" + correct);
            console.log("Incorrect:" + incorrect);

            // display Time's Up
            $("#correct").removeClass("hidden");

            // newTimer();
            setTimeout(function(){ 

                // show next question    
                $(questionArr[questionCount]).show();
                //reset the timer before the next question
                newTimer();
                //re-hide Time's Up message
                $("#correct").addClass("hidden");                
            }, 2000);
            
        } else if (answer === "incorrect"){
            console.log("The answer is incorrect");
            //increase incorrect answers total
            incorrect++;

            // hide the question
            $(questionArr[questionCount]).hide();

            // increase questionCount by 1
            questionCount++;
            console.log("You have finished " + questionCount + " out of " + questionArr.length +" questions")

            console.log("Correct:" + correct);
            console.log("Incorrect:" + incorrect);

            // display message "Wrong!"
            $("#incorrect").removeClass("hidden");

            // newTimer();

            setTimeout(function(){ 
                
                // show next question    
                $(questionArr[questionCount]).show();

                //reset the timer before the next question
                newTimer();

                //re-hide "Wrong!" message
                $("#incorrect").addClass("hidden");
                
            }, 2000);
            
        } else if (correct + incorrect === questionArr.length){
            // if 10 questions have been answered 
            console.log("Game Over");
            // display Game Over message 

            setTimeout(function(){ 
                $("#gameOver").removeClass("hidden");
                $("#score").removeClass("hidden");
                $("#numberCorrect").html(correct);
                // stop the timer 
                stopTimer();
                return;
            }, 3000);
              
        }
         
    }, 1000);  

    


}

function stopTimer(){
    // stop the timer
    clearInterval(startTimer);
}

// invoke the hideQuestions function 
hideQuestions();

// Start Button stops the timer if it is running and starts a new game
$("#start").on("click", function(){
    stopTimer();    
    newGame();
})





       