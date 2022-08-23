// disbale functionality
function disable (x){
    x.disabled = true;
}

// arrary added items
function playerDisplay (playerList)
{

    const listBody =document.getElementById('list-container')
    listBody.innerText='';
    for( let i=0; i<5; i++){
    
        const newPlayerName = playerArray[i].playerName;
        const li = document.createElement('li');
        li.innerText = newPlayerName;
        listBody.appendChild(li);
    }

    if(playerArray.length>5){
        
        alert('You cannot add more');
       
     }
  
}



// arrary
const playerArray =[];



//    Object push in arrary section
function addToCart (element){
    const playerName = element.parentNode.children[0].innerText;
    element.style.cursor = 'not-allowed'
    element.disabled = true;
   
    const playerObj ={
        playerName : playerName 
    }
   
    playerArray.push(playerObj);

    // limit seleted players
if(playerArray.length <= 5){
    document.getElementById('Select-players').innerText =playerArray.length;
    
}
playerDisplay(playerArray);

// added calculate button functionality
    document.getElementById('calculate').addEventListener('click',function click(){
        const playerPrice = document.getElementById('player-price');
        const playerPriceValueString = playerPrice.value ;
        const playerPriceValue  =parseFloat(playerPriceValueString); 
         
        
        const playerExpense = document.getElementById('Player-Expense');
        const TotalPlayerExpense = playerPriceValue * playerArray.length;
        playerExpense.innerText = TotalPlayerExpense;

      // added Total player button button functionality
        document.getElementById('total-calculate-btn').addEventListener('click',function (){

            const managerPrice = document.getElementById('manager');
            const managerPriceValueString = managerPrice.value ;
            const managerPriceValue  =parseFloat(managerPriceValueString); 
        
            const coachPrice = document.getElementById('coach');
            const coachPriceValueString = coachPrice.value ;
            const coachPriceValue  =parseFloat(coachPriceValueString); 
            
            const totalPlayerPrice = TotalPlayerExpense + managerPriceValue + coachPriceValue ;
            console.log(totalPlayerPrice);


        const totalPlayerExpense = document.getElementById('total-player-expense'); 
        totalPlayerExpense.innerText = totalPlayerPrice;
        
        })    
    })
}


