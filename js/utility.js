function dataSubTotal(productName, productPrize, productQty, productTotal) {
    document.getElementById("total-items").innerText = serial;
    // grand total validation:
    const budgetAmount = document.getElementById('budget-amount').innerText;
    if (grandTotal >= budgetAmount) {
        alert('You can not expend more than your budget')
    } else {
        document.getElementById('total-sum').innerText = grandTotal;
        const totalSubData = document.getElementById("table-container");
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${serial}</td>
        <td>${productName}</td>
        <td>${productQty}</td>
        <td>${productPrize}</td>
        <td>${productTotal}</td>
        <td>${grandTotal}</td>
        `
        totalSubData.appendChild(tr);
    }

}

document.getElementById('new-budget-amount').addEventListener('keyup', function () {
    budgetChecker();
})

function budgetChecker() {
    const newBudget = document.getElementById('new-budget-amount').value;
    const oldBudget = document.getElementById('budget-amount');
    oldBudget.innerText = newBudget;
    const budgetAmount = document.getElementById('budget-amount').innerText;
    return parseFloat(budgetAmount);

}