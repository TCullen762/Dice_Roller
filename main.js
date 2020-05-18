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





let dieRolls =[]
let sumOfAllRolls = 0

const rollInputBox= document.querySelector("#input_box")//selects HMTL node
const rollButton = document.querySelector("#roll_button")
rollButton.addEventListener("click",function(){
    let result = rollInputBox.value //this is the number everything else is multiplied by
   
    let counter = 0
    while( counter < result){
        let randNum = Math.floor( Math.random() * 6 ) +1
       sumOfAllRolls += randNum
       
        
      
    
    dieRolls.push(randNum)
  
    const totalOutPut = document.querySelector("#totalInput")//selects HTML Node
    totalOutPut.innerHTML = sumOfAllRolls
    counter += 1
    }//end while loop
    
    //console.log(dieRolls)
    //console.log(sumOfAllRolls)
     
    
     
}
)


    let counter = 0
    let diceRollsList = document.querySelector("#allDiceRollsList")
    const allRollsButton = document.querySelector("#allRollsButton")
allRollsButton.addEventListener("click",function(){
    while(counter<dieRolls.length){
       diceRollsList.innerHTML += '<li>'+ dieRolls[counter] + '</li>'
        counter += 1
       
    }
   }
   )

   const rollOutPut = document.querySelector("#totalInput")
    const resetButton = document.querySelector("#rstBtn")
  
   resetButton.addEventListener("click", function(){
     
rollOutPut.innerHTML = dieRolls.pop.length
diceRollsList.innerHTML = dieRolls.pop.length 

  }
   )
