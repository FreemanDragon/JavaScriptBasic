function handleButtonClick(event) {
    if (event.target.textContent == 'Купить') {
        addGoodsToCart(product[event.target.parentNode.dataset.number]);
        init();
    }
    if (event.target.textContent == 'Удалить') {
        cart.splice(event.target.parentNode.dataset.number, 1);
        init();
    }
    if (event.target.textContent == '+') {
        focusInput = event.target.parentNode.parentNode.dataset.number;
        cart[event.target.parentNode.parentNode.dataset.number].quantity++;
        init();
    }
    if (event.target.textContent == '-' && cart[event.target.parentNode.parentNode.dataset.number].quantity > 1) {
        focusInput = event.target.parentNode.parentNode.dataset.number;
        cart[event.target.parentNode.parentNode.dataset.number].quantity--;
        init();
    }
}

function handleInputChange(event) {

    if (event.target.nodeName == 'INPUT') {
        if (+event.target.value < 1 )
            event.target.value = 1;
        else if (event.target.value > 99999999999999)
            event.target.value = 99999999999999;
        focusInput = event.target.parentNode.parentNode.dataset.number;
        cart[event.target.parentNode.parentNode.dataset.number].quantity = +event.target.value;
        init();
    }
}

function init() {
    getProduct();
    getCart();
    var $product = document.querySelector('#product');
    $product.addEventListener('click', handleButtonClick);
    var $cart = document.querySelector('#cart');
    $cart.addEventListener('click', handleButtonClick);
    $cart.addEventListener('input', handleInputChange);
}

window.addEventListener('load', init);
