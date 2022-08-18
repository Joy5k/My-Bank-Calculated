document.getElementById('btn-deposit').addEventListener('click', function () {
   const inputValue= getTextElementById('deposit-field');

    const PrevioustValue = setValue('deposit-total');
    const currentValueInDeposit = inputValue + PrevioustValue;
    const addTaka = document.getElementById('deposit-total');
    addTaka.innerText = currentValueInDeposit;

  

  
    // setTotalBalance('deposit-total',  currentValueInDeposit);
    const PrevioustTaka =setValue('balance-total');
    const sumAllTaka = inputValue + PrevioustTaka;
    setTotalBalance('balance-total',sumAllTaka);

})
                            // second button start here///

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawAmmoount = getTextElementById('withdraw-field');

    const withdrawBalance = setValue('withdraw-total');
    const newAmmountInWithdraw = withdrawBalance + withdrawAmmoount;
    const PreviousWithdraw = document.getElementById('withdraw-total');
    PreviousWithdraw.innerText = newAmmountInWithdraw;

   
    const PrevioustTotalTaka = setValue('balance-total');
    const currentTotalTaka = PrevioustTotalTaka - withdrawAmmoount;
    setTotalBalance('balance-total',currentTotalTaka)

})
                    // Main function started from here////

function getTextElementById(element) {
    const texElement = document.getElementById(element);
    const texElementString = texElement.value;
    const texElementValue = parseFloat(texElementString);
    texElement.value = '';
    return texElementValue ;
}
function setValue(IdName) {
    const textElement = document.getElementById(IdName);
    const textElementString = textElement.innerText;
    const textElementValue = parseFloat(textElementString);
    // console.log(textElementValue)
    return textElementValue;
}
function setTotalBalance(element1, element2) {
    const totalBalance = document.getElementById(element1);
    totalBalance.innerText = element2;
}


