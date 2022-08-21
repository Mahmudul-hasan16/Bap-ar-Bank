// step-1 : add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2 : get the deposit amount from the deposit input field
    // always remember to use .value to get the text from an input feild
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);


    // step-3 : get the current deposit total amount
    // for no input field  use innerText to get the value or text 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);


    // step-4 : set total amount in the deposit section to update value 
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;


    // step-5 : get the current total balace 
    const balanceTotalElement = document.getElementById('total-balance');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6 : calculate the current total balace 
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;



    // step-7 : clear the deposit field
    depositField.value = '';

})