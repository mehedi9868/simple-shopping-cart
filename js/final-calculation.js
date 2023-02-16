
document.getElementById('discount-btn').addEventListener('click', function () {
    const budgetAmount = document.getElementById('budget-amount').innerText;
    const grandTotal = document.getElementById('total-sum').innerText;
    const discountField = document.getElementById('discount-field');
    const couponText = discountField.value;
    const discountDisplay = document.getElementById('total-discount');
    const finalAmmount = document.getElementById('final-sum');
    const remainingBalance = document.getElementById('remaining-balance');
    if (couponText === 'DISC20') {
        // discount calc 
        const finalDiscount = parseInt(grandTotal) * .20;
        discountDisplay.innerText = parseFloat(finalDiscount.toFixed(2));
        // final total calc
        finalAmmount.innerText = parseInt(grandTotal) - parseFloat(finalDiscount);
        // remaining balance
        remainingBalance.innerText = parseFloat(parseInt(budgetAmount) - parseFloat(finalAmmount.innerText)).toFixed(2);
    } else {
        alert('please enter a valid cupon');
    }


})