const playerArray = [];
function getTopFive(element){

    if(playerArray.length < 5){
    
        const playerName = element.parentNode.parentNode.children[0].innerText;
        playerArray.push(playerName);

        const playerList = document.getElementById('player-list');
        const li = document.createElement('li');

        for(let i = 0; i < playerArray.length; i++){
        li.innerText = `${playerArray[i]}`
        }
        playerList.appendChild(li)

        element.disabled = 'true';
        element.style.background = 'gray';
        element.style.border = 'white';
    }
    else{
        alert('Sorry!! You can not add player more than five')
    }
}