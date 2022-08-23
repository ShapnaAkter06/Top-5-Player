// Calculation Total Budget

document.getElementById('btn-calculate').addEventListener('click', function(){
    const costPerPlayerValue = getInputFieldValueById('cost-per-player');
    const costPerPlayer = costPerPlayerValue * (playerArray.length);
    if( costPerPlayerValue < 0 ||  isNaN(costPerPlayerValue)){
        alert('Please check your input field');
        return
    }
    seTextElementValueById('player-expenses', costPerPlayer);
})
document.getElementById('total-calculate-btn').addEventListener('click', function(){
    const costOfManager = getInputFieldValueById('manager-cost');
    const costOfCoach = getInputFieldValueById('coach-cost');
    const playerExpenses = getTextElementValueById('player-expenses');

    if((costOfManager < 0) || isNaN(costOfManager) || (costOfCoach < 0) || isNaN(costOfCoach) || (playerExpenses < 0) || isNaN(playerExpenses)){
        alert('Please enter valid number');
        return
    }

    const currentTotalExpenses = costOfManager + costOfCoach + playerExpenses;
    seTextElementValueById('total', currentTotalExpenses);
})