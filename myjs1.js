function numberToObject(number) {

    while (1) {
        if (0 <= number && number % 1 == 0) break;
        else number = +prompt('Вы ввели некорректное число\nВведите целое число больше 0');
    }

    if (number > 999) {
        console.log('Число больше 999');
        return {};
    }

    var hundreds = number / 100 - ((number / 100) % 1);
    var tens = (number - hundreds * 100)/ 10 - (((number - hundreds * 100) / 10) % 1);
    var units = number - hundreds * 100 - tens * 10;

    return {
        единицы : units,
        десятки : tens,
        сотни : hundreds,
    }
}
function solution() {
    var numberO = numberToObject(+prompt('Введите целое число больше 0'));
    console.log(numberO);
}
