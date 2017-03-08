# HW- TriviaGame

## Live Link 
 - https://castlemaninc.github.io/TriviaGame/

## How to play Philosophical Trivia
 1. Click the New Game button to begin a new game
 2. Read the questions and select the answers which you believe are correct within the alotted time
	
## The Homework Requirements were: 


-Create a trivia game that shows only one question until the player answers it or their time runs out.


-If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.


-The scenario is similar for wrong answers and time-outs.
-If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
-If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.


-On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

## Technologies Used
- jQuery for DOM Manipulation

##Code Explained 

- A game function sets the game into motion using a setInterval function which moves the game along at 1 second intervals 
- A time variable is decremented by the value of 1 at every second replicating a countdown timer 

- The game progresses based on a number of scenarios:
1. The time runs out
2. The user selects an answer either correct or incorrect 

- In each instance a setTimeout function is called 

- The progress of the game is halted at the end of the game by a stopTimer function that uses clearInterval. 


