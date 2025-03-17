/* Nim Trainer by [your name]
 * based on this flowchart:
 * https://lucid.app/lucidchart/2018baaf-4c26-4a76-a0d5-93c97f444425/view
 */

/* Global Variables */
var trainer = false
var count = 0

/** 
 * main  
 * Handles new Nim games with gametype choice simple or trainer and a play again option. 
 * @param none 
 * @return none
 */
/* Main */
function main(){
var again = true
while (again == true){
trainer = confirm("Trainer MODE???");
playNim()
again = confirm("again?");
}
}

/** 
 * playNim 
 * plays a game with user first and computer second. Winner declared in an alert box. 
 * @param none 
 * @return none
 */
function playNim(){
count = 0
while(count < 21){
userTurn();
if (count > 20) {alert("you lose!")}
    else {cpuTurn();
if (count > 20) {alert("you win!")
}
}
}
}

/** 
 * userTurn  
 * User enters a turn. Validation against cheating handled by recursion.
 * @param none 
 * @return none
 */
function userTurn(){
var turn = 0

    while(turn > 3 || turn < 1){
alert("Yes in user turn")
turn = prompt("Input a number withing the range of 1-3 not + current highest number.")
turn = Math.floor(turn)
alert("Floored turn num = " + turn)
if (turn > 3 || turn < 1) alert("Your input is invalid")
    else break
}
count = count + turn
alert("count is now " + count);
}

/** 
 * cpuTurn 
 * Generate computer's turn without losing on purpose.  Different turns if trainer or simple.  
 * @param none 
 * @return none
 */
function cpuTurn(){
turn = 0
if (count == 17) turn = 3;
else if(count == 18) turn = 2
else if(count > 18) turn = 1
else if(trainer == true ) turn = 4 - count % 4
}
