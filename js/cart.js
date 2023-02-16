let serial = 0;
let grandTotal = 0;
// 1st card
document.getElementById("first-card-btn").addEventListener("click", function () {
    serial++;
    const productName = document.getElementById("first-card-title").innerText;
    const productPrize = document.getElementById("first-card-prize").innerText;
    const productQuantity = document.getElementById("first-product-qty").innerText;
    // math operation
    const firstProduct = parseInt(productPrize) * parseInt(productQuantity);
    grandTotal += firstProduct;
    // call display function 
    dataSubTotal(productName, productPrize, productQuantity, firstProduct);
    // btn disabled 
    document.getElementById('first-card-btn').setAttribute('disabled', true)
})

// 2nd card
document.getElementById("second-card-btn").addEventListener("click", function () {
    serial++;
    const productName = document.getElementById("second-card-title").innerText;
    const productPrize = document.getElementById("second-card-prize").innerText;
    const productQuantity = document.getElementById("second-card-qty").innerText;
    // math operation
    const secondProduct = parseInt(productPrize) * parseInt(productQuantity);
    grandTotal += secondProduct;
    // call display function
    dataSubTotal(productName, productPrize, productQuantity, secondProduct);
    // btn disabled 
    document.getElementById('second-card-btn').setAttribute('disabled', true)
})

// 3rd card
document.getElementById("third-card-btn").addEventListener("click", function () {
    serial++;
    const productName = document.getElementById("third-card-title").innerText;
    const productPrize = document.getElementById("third-card-prize").innerText;
    const productQuantity = document.getElementById("third-card-qty").innerText;
    // math operation
    const thirdProduct = parseInt(productPrize) * parseInt(productQuantity);
    grandTotal += thirdProduct;
    // call display function
    dataSubTotal(productName, productPrize, productQuantity, thirdProduct);
    // btn disabled 
    document.getElementById('third-card-btn').setAttribute('disabled', true)
})

// 4th card
document.getElementById("card-4-btn").addEventListener("click", function () {

    serial++;
    const productName = document.getElementById("card-4-title").innerText;
    const productPrize = document.getElementById("card-4-price").innerText;
    const productQuantity = document.getElementById("card-4-qty").innerText;
    // math operation
    const fourthProduct = parseInt(productPrize) * parseInt(productQuantity);
    grandTotal += fourthProduct;
    // call display function
    dataSubTotal(productName, productPrize, productQuantity, fourthProduct);
    // btn disabled 
    document.getElementById('card-4-btn').setAttribute('disabled', true)
})

// 5th card
document.getElementById("card-5-btn").addEventListener("click", function () {

    serial++;
    const productName = document.getElementById("card-5-title").innerText;
    const productPrize = document.getElementById("card-5-price").value;
    const productQuantity = document.getElementById("card-5-qty").value;
    // math operation
    const fifthProduct = parseInt(productPrize) * parseInt(productQuantity);
    if (isNaN(fifthProduct)) {
        alert('Please enter price and quantity')
    } else {
        grandTotal += fifthProduct;
        // call display function
        dataSubTotal(productName, productPrize, productQuantity, fifthProduct);
        // btn disabled and clear
        document.getElementById('card-5-btn').setAttribute('disabled', true)
        document.getElementById("card-5-price").value = '';
        document.getElementById("card-5-qty").value = '';

    }
})
