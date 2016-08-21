var products = [];

function save() {    
    var product = getProduct();

    createProductDiv(product);

    products.push(product);    
}