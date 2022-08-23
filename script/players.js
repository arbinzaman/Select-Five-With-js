function disable (x){
    x.disabled = true;
}

function playerDisplay (playerList)
{

    const listBody =document.getElementById('list-container')
    listBody.innerText='';
    for( let i=0; i<playerList.length; i++){
    
        const newPlayerName = playerArray[i].playerName;
        const li = document.createElement('li');
        li.innerText = newPlayerName;
        listBody.appendChild(li);
    }
 
 
}




const playerArray =[];

function addToCart (element){
   
    const playerName = element.parentNode.children[0].innerText;
   
    const playerObj ={
        playerName : playerName 
    }
   
    playerArray.push(playerObj);

    console.log(playerArray.length);

    document.getElementById('Select-players').innerText =playerArray.length;
    playerDisplay(playerArray);


    document.getElementById('calculate').addEventListener('click',function click(){
        const playerPrice = document.getElementById('player-price');
        const playerPriceValueString = playerPrice.value ;
        const playerPriceValue  =parseFloat(playerPriceValueString); 
         
        
        const playerExpense = document.getElementById('Player-Expense');
        const TotalPlayerExpense = playerPriceValue * playerArray.length;
        playerExpense.innerText = TotalPlayerExpense;

      
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


