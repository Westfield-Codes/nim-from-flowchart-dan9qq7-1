/* Nim Trainer by [your name]
 * based on this flowchart:
 * https://lucid.app/lucidchart/2018baaf-4c26-4a76-a0d5-93c97f444425/view
 */

/* Global Variables */
var trainer = false
var count = 0
var turnorder = cpu
var whoseturn = false
var sv = 0

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
sv = 0
whoseturn = confirm("random turns?");
if (whoseturn == false) turnorder = confirm("would you prefer to go first?")
else sv = Math.floor(Math.random()*2+1);
if (sv == 1) turnorder = true
    else turnorder = false 

/* 
*/
if (turnorder == true) while(count < 21){ 
userTurn();
if (count > 20) {alert("you lose!")}
    else { cpuTurn();
if (count > 20) {alert("you win!")}
}
}
else if (turnorder == false)while(count < 21){ 
    cpuTurn();
    if (count > 20) {alert("you win!")}
        else {userTurn();
    if (count > 20) {alert("you lose!")}
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
alert("Your turn")
turn = prompt("Input a number withing the range of 1-3 not + current highest number.")
turn = parseInt(turn)
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
if(turnorder == false) alert("Cpu's Turn")
if (count == 17) turn = 3;
else if(count == 18) turn = 2
else if(count > 18) turn = 1
else if(trainer == true && turn > 1) turn = 4 - count % 4
else turn = Math.floor(Math.random()*3+1)
count = count + turn;
alert("i counted " + turn + " count is now " + count);
}
