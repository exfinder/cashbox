function getProduct() {
    var prodNameInput = document.getElementById('productName');
    var prodName = prodNameInput.value;

    var prodPriceInput = document.getElementById('productPrice');
    var prodPrice = prodPriceInput.value;

    return {
        name: prodName,
        price: prodPrice
    };
}

function createProductDiv(product){
    var prodNameDiv = document.createElement('div');
    prodNameDiv.innerText = product.name + ' - ' + product.price + ' грн.';
    document.body.appendChild(prodNameDiv);
}