function newOrder() {
    document.getElementById('searchAndCart').style.display = 'block';
    document.getElementById('newOrder').style.display = 'none';
}


var products = [];

function save() {    
    var product = getProduct();

    createProductDiv(product);

    products.push(product);    
}