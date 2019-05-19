function getProduct() {
    var $product = document.getElementById('product');
    $product.textContent = ''; //Очищаем предыдущее содержимое
    var $header = document.createElement('p');
    $header.textContent = 'Выберете товары';
    $product.appendChild($header);
    for (i = 0; i < product.length; i++) {
        var $goods = document.createElement('div');
        $goods.dataset.number = i; //Вешаем на див номер товара в массиве product, чтобы понять на какой товар нажали
        $goods.classList.add('goods');
        var $img = document.createElement('img');
        var $name = document.createElement('p');
        $name.textContent = product[i].name;
        var $price = document.createElement('p');
        $price.textContent = product[i].price;
        var $button = document.createElement('button');
        $button.textContent = buyOrIs(product[i]);
        $goods.appendChild($name);
        $goods.appendChild($price);
        $goods.appendChild($button);
        $product.appendChild($goods);
    }
}

function getCart() {
    var $cart = document.getElementById('cart');
    $cart.textContent = '';
    for (i = 0; i < cart.length; i++) {
        var $goods = document.createElement('div');
        $goods.dataset.number = i; //Вешаем на див номер товара в массиве cart
        $goods.classList.add('goods');
        var $img = document.createElement('img');
        var $name = document.createElement('p');
        $name.textContent = cart[i].name;
        var $price = document.createElement('p');
        $price.textContent = cart[i].price;
        var $quantity = document.createElement('input');
        $quantity.textContent = cart[i].quantity;
        var $priceAll = document.createElement('p');
        $priceAll.textContent =(cart[i].price * cart[i].quantity);
        var $delete = document.createElement('button');
        $delete.textContent = 'Удалить';
        $goods.appendChild($name);
        $goods.appendChild($price);
        $goods.appendChild($quantity);
        $goods.appendChild($priceAll);
        $goods.appendChild($delete);
        $cart.appendChild($goods);
    }
    var $basketPrice = document.createElement('p');
    $basketPrice.textContent = countBasketPrice();
    $cart.appendChild($basketPrice);
}

function buyOrIs(goods) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name == goods.name)
            return 'Уже есть в корзине';
    }
    return 'Купить'
}

function countBasketPrice() {
    var price = 0;
    var quantityAllCart = 0;
    for (var i = 0; i < cart.length; i++) {
        price += cart[i].price * cart[i].quantity;
        quantityAllCart += cart[i].quantity; // Считаем общее количество товаров в корзине
    }
    if (cart.length == 0) return 'Корзина пуста';
    return 'В корзине: ' + quantityAllCart + ' товар' + correctTermination(quantityAllCart) + ' на сумму ' + price + ' руб.';
}

function correctTermination(n) { // В зависимости от количества ставим правильное окончание в слове товар
    n += ''; // Переводим количество товаров в строку
    n = +n[n.length - 1]; // Узнаем последнюю цифру
    if (n == 1) return ''; // Если 1 - то "товар"
    if (1 < n && n < 5) return 'а'; // Если 2,3 или 4 - то "товара"
    return 'ов'; // Если 5,6,7,8,9 или 0 - то "товаров"
}

function addGoodsToCart(goods) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name == goods.name) {
            alert('У Вас в корзине уже есть такой товар');
            return; //Не добавлять товар в корзину
        }
    }
    goods.quantity = 1;
    cart.push(goods);
}