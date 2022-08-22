// Set the player name
const playerArray = [];

function display(players){
    if(players.length > 5){
        alert('You can not select more than five');
        return;
    }
    const tableBody = document.getElementById('players-name');
    tableBody.innerHTML = '';

    for (let i = 0; i < players.length; i++){
        const name = playerArray[i].playerName;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        `;
        tableBody.appendChild(tr)
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
    // document.getElementById('total-added-player').innerText = playerArray.length;
    display(playerArray)
}