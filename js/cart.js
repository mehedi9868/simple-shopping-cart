let serial = 0;
let grandTotal = 0;
const budgetAmount = document.getElementById('budget-amount').innerText;
// 1st card
document.getElementById("first-card-btn").addEventListener("click", function () {
    // grand total validation:


    const productName = document.getElementById("first-card-title").innerText;
    const productPrize = document.getElementById("first-card-prize").innerText;
    const productQuantity = document.getElementById("first-product-qty").value;
    // math operation
    const firstProduct = parseInt(productPrize) * parseInt(productQuantity);
    if (grandTotal + firstProduct > budgetAmount) {
        alert('You can not expend more than your budget');
    } else {
        grandTotal += firstProduct;
        // call display function 
        serial++;
        dataSubTotal(productName, productPrize, productQuantity, firstProduct);
        // btn disabled  
        document.getElementById('first-card-btn').setAttribute('disabled', true)
    }
})

// 2nd card
document.getElementById("second-card-btn").addEventListener("click", function () {

    const productName = document.getElementById("second-card-title").innerText;
    const productPrize = document.getElementById("second-card-prize").innerText;
    const productQuantity = document.getElementById("second-card-qty").value;
    // math operation
    const secondProduct = parseInt(productPrize) * parseInt(productQuantity);
    if (grandTotal + secondProduct > budgetAmount) {
        alert('You can not expend more than your budget');
    } else {
        grandTotal += secondProduct;
        // call display function
        serial++;
        dataSubTotal(productName, productPrize, productQuantity, secondProduct);
        // btn disabled
        document.getElementById('second-card-btn').setAttribute('disabled', true)

    }

})

// 3rd card
document.getElementById("third-card-btn").addEventListener("click", function () {
    const productName = document.getElementById("third-card-title").innerText;
    const productPrize = document.getElementById("third-card-prize").innerText;
    const productQuantity = document.getElementById("third-card-qty").value;
    // math operation
    const thirdProduct = parseInt(productPrize) * parseInt(productQuantity);
    if (grandTotal + thirdProduct > budgetAmount) {
        alert('You can not expend more than your budget');
    } else {
        grandTotal += thirdProduct;
        // call display function
        serial++;
        dataSubTotal(productName, productPrize, productQuantity, thirdProduct);
        // btn disabled
        document.getElementById('third-card-btn').setAttribute('disabled', true)

    }
})

// 4th card
document.getElementById("card-4-btn").addEventListener("click", function () {


    const productName = document.getElementById("card-4-title").innerText;
    const productPrize = document.getElementById("card-4-price").innerText;
    const productQuantity = document.getElementById("card-4-qty").value;
    // math operation
    const fourthProduct = parseInt(productPrize) * parseInt(productQuantity);
    if (grandTotal + fourthProduct > budgetAmount) {
        alert('You can not expend more than your budget');
    } else {
        grandTotal += fourthProduct;
        // call display function
        serial++;
        dataSubTotal(productName, productPrize, productQuantity, fourthProduct);
        // btn disabled
        document.getElementById('card-4-btn').setAttribute('disabled', true)
    }
})

// 5th card
document.getElementById("card-5-btn").addEventListener("click", function () {


    const productName = document.getElementById("card-5-title").innerText;
    const productPrize = document.getElementById("card-5-price").value;
    const productQuantity = document.getElementById("card-5-qty").value;
    // math operation
    const fifthProduct = parseInt(productPrize) * parseInt(productQuantity);
    if (grandTotal + fifthProduct > budgetAmount) {
        alert('You can not expend more than your budget');
    } else {
        if (isNaN(fifthProduct)) {
            alert('Please enter price and quantity')
        } else {
            grandTotal += fifthProduct;
            // call display function
            serial++;
            dataSubTotal(productName, productPrize, productQuantity, fifthProduct);
            // btn disabled and clear
            document.getElementById('card-5-btn').setAttribute('disabled', true)
            document.getElementById("card-5-price").value = '';
            document.getElementById("card-5-qty").value = '';
        }
    }
})

