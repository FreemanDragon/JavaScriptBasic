function handleButtonClick(event) {
    if (event.target.textContent == 'Купить')
        addGoodsToCart(product[event.target.parentNode.dataset.number]);
    if (event.target.textContent == 'Удалить')
        cart.splice(event.target.parentNode.dataset.number, 1);
    init();
}

function init() {
    getProduct();
    getCart();
    var $product = document.querySelector('#product');
    $product.addEventListener('click', handleButtonClick);
    var $cart = document.querySelector('#cart');
    $cart.addEventListener('click', handleButtonClick);
}

window.addEventListener('load', init);
