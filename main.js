/*

TODO :
Create a variable, named dieRolls, and define it as an empty array 
(which later you will use as a list of each die that has been rolled). (1 point)
Add a click event listener for your "Roll!" button. (1 point)
On click, you need to get the value from the text input box, so that you know how many dice to roll. 
Assign this to a variable within your event listener. (1 point)
Then you need to roll the dice. It is time to write a loop. 
Use Math.random() to simulate rolling a single six-sided die X number of times,
 where X is the number from the text input box. X is also the number of times you will loop. (4 points)
Push the result of each roll onto your dieRolls array. (2 points)
Sum all your dice rolls and display the result in the Total area on the page using innerHTML. (2 point)

*/

/* THIS IS FUCING ALLADEEN

let dieRolls =[]
let rollInputBox = 1
let totalDice = rollInputBox //the number selected by the user to roll
let mathStuff = Math.floor( Math.random(1-7)*6) //this is not producing a random
//let userInput = 0
//let rollInputBox= document.querySelector("#input_box")//selects HMTL node
const rollButton = document.querySelector("#roll_button")
rollButton.addEventListener("click",function(){
 
 console.log(totalDice)
 console.log(mathStuff)
     //if( Math.floor( Math.random() * 6) + 1){
        totalRolls.innerHTML= rollInputBox += 1 //returns nothing but no errors
         //console.log('does the button work?')//yes it works
         //why is the innerHTML not working?

}
)*/ 

//user input is working with the math function
//values getting pushed into array
let dieRolls =[]
let randNum = Math.floor( Math.random() * 6 ) +1
/*problem with the math: The first number that is outputted from the function
Only the first number is actualy random everything that follows is a multiple of the first number and not random*/

const rollInputBox= document.querySelector("#input_box")//selects HMTL node
const rollButton = document.querySelector("#roll_button")
rollButton.addEventListener("click",function(){
    const result = rollInputBox.value
    const roll = result * randNum
    console.log(roll)
    dieRolls.push(roll)
    console.log(dieRolls)
    console.log(dieRolls)
    const total = document.querySelector("#totalInput")//selects HTML Node
    total.innerHTML = roll
   }
   )

  //loop works but prints horizontally

    let counter = 1
    let diceRollsList = document.querySelector("#allDiceRollsList")
    const allRollsButton = document.querySelector("#allRollsButton")
allRollsButton.addEventListener("click",function(){
    while(counter<=6){
       diceRollsList.innerHTML = dieRolls
        counter += 1
    }
   }
   )

   //this is not working fix it
   //try array.pop.length ?
   //const rollOutPut = document.querySelector("#all_rolls")
   //const resetButton = document.querySelector("#resetBtn")
  
   //resetButton.addEventListener("click", function(){
       
    //document.querySelector('#all_rolls')


  // }
   //)
