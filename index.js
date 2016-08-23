function newOrder() {
    hide('newOrder');
    show('searchAndCart')
}

function cancelOrder () {
    show('newOrder');
    hide('searchAndCart')
}

function show (id){
    document.getElementById(id).style.display = 'block';
}

function hide (id) {
    document.getElementById(id).style.display = 'none';
}

var products = [];

function save() {    
    var product = getProduct();

    createProductDiv(product);

    products.push(product);    
}