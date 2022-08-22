// Select Player

const playerArray = [];

function display(players){
    if(players.length > 5){
        alert('Sorry!! You can not select player more than five');
        return;
    }
    const playerList = document.getElementById('players-name');
    playerList.innerHTML = '';

    for (let i = 0; i < players.length; i++){
        const name = playerArray[i].playerName;
        const li = document.createElement('li');
        li.innerHTML = name;
        playerList.appendChild(li)
    }
}
function getTopFive(element){
    element.disabled = true;
    element.style.background = 'gray';
    element.style.border = 'white';
    const playerName = element.parentNode.parentNode.children[0].innerText;
    
    const playerObj = {
        playerName : playerName
    }
    playerArray.push(playerObj);
    display(playerArray)
}