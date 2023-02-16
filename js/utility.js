function dataSubTotal(productName, productPrize, productQty, productTotal) {
    document.getElementById("total-items").innerText = serial;
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
