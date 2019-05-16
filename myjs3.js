function countBasketPrice(cart) {
    var price = 0;
    var i = 0 ;
    var n = 0;
    while (i < cart.length) {
        if (cart[i].quantity == 0) {
            cart.splice(i, 1); //Удаляем товар из корзины если новое количество равно 0
            break;
        }
        price += cart[i].price * cart[i].quantity;
        n += cart[i].quantity// Считаем количество товаров в корзине
        i++;
    }
    if (cart.length == 0) return 'Корзина пуста';
    return 'В корзине: ' + n + ' товар' + correctTermination(n) + ' на сумму ' + price + ' руб.';
}

function correctTermination(n) {
    n += ''; //Переводим количество товаров в строку
    n = +n[n.length - 1]; // Узнаем последнюю цифру
    if (n == 1) return '';
    if (1 < n && n < 5) return 'а';
    return 'ов';
}

function reloadDiv() {
    window.setInterval('refreshDiv()', 500);

}

function refreshDiv() {
    var el = document.getElementById('Sol2');
    el.textContent = countBasketPrice(cart);
}

function addBasketToCart(basket) {
    var i = 0;
    while (i < cart.length) {
        if (cart[i].name == basket.name) {
            alert('У Вас в корзине уже есть такой товар\nв количестве ' + basket.quantity + '\nВведите новое количство');
            cart.splice(i,1);
            break;
        }
        i++;
    }
    basket.quantity = correctNumber('Введите количество выбранного вами товара :' + basket.name);
    cart.push(basket);
}

function correctNumber(displayMessage) {
    var correctNumber = +prompt(displayMessage);
    while (1) {
        if (correctNumber >= 0 && correctNumber % 1 == 0) return correctNumber;
        else correctNumber = +prompt('Вы ввели некорректное число. \nВведите целое число больше 0\n' + displayMessage)
    }
}
