// Calculation Total Budget

document.getElementById('btn-calculate').addEventListener('click', function(){
    const costPerPlayerValue = getInputFieldValueById('cost-per-player');
    const costPerPlayer = costPerPlayerValue * (playerArray.length);
    if(isNaN(costPerPlayer)){
        alert('Please check your input field');
        return
    }
    seTextElementValueById('player-expenses', costPerPlayer);
})
document.getElementById('total-calculate-btn').addEventListener('click', function(){
    const costOfManager = getInputFieldValueById('manager-cost');
    const costOfCoach = getInputFieldValueById('coach-cost');
    const playerExpenses = getTextElementValueById('player-expenses');

    if(isNaN(costOfManager) || isNaN(costOfCoach) || isNaN(playerExpenses)){
        alert('Please enter valid number');
        return
    }

    const currentTotalExpenses = costOfManager + costOfCoach + playerExpenses;
    seTextElementValueById('total', currentTotalExpenses);
})