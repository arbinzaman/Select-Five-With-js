// function disable (x){
//     x.disabled = true;
// }

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
}