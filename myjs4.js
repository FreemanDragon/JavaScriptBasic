function handleButtonClick(event) {
    if (event.target.textContent == 'Купить') {
        addGoodsToCart(product[event.target.parentNode.dataset.number]);
        init();
    }
    if (event.target.textContent == 'Удалить') {
        cart.splice(event.target.parentNode.dataset.number, 1);
        init();
    }
}

function handleInputChange(event) {
//    if (event.target == 'Input')
        console.log(event.target);
}

function init() {
    getProduct();
    getCart();
    var $product = document.querySelector('#product');
    $product.addEventListener('click', handleButtonClick);
    var $cart = document.querySelector('#cart');
    $cart.addEventListener('click', handleButtonClick);
    $cart.addEventListener('change', handleInputChange);
}

window.addEventListener('load', init);
