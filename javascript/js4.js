function task4_first() {
    let output = document.getElementById('output');
    output.innerHTML = "Перше завдання<br>";

    let num1 = parseFloat(prompt("Введіть перше число:"));
    let num2 = parseFloat(prompt("Введіть друге число:"));

    output.innerHTML += "Результат: " + (num1 + num2) + "<br>";

    output.innerHTML += "<br>";
}

function task4_second() {
    let output = document.getElementById('output');
    output.innerHTML = "Друге завдання<br>";

    // Округляємо число 5.678 до однієї цифри після коми
    let result = (Math.round(5.678 * 10) / 10).toFixed(1);

    output.innerHTML += "Результат округлення: " + result + "<br>";

    output.innerHTML += "<br>";
}


function task4_third() {
    let output = document.getElementById('output');
    output.innerHTML = "Третє завдання<br>";

    output.innerHTML += "Введене число: " + readFloatNumber() + "<br>";

    output.innerHTML += "<br>";
}

function task4_fourth() {
    let output = document.getElementById('output');
    output.innerHTML = "Четверте завдання<br>";

    let i = 0;

    /* Цикл завершується, коли різниця між i і 10 стає меншою ніж 0.001 */

    while (Math.abs(i - 10) > 0.001) {
        i += 0.2;
        output.innerHTML += i + "<br>";
    }

    output.innerHTML += "<br>";
}

function task4_fifth() {
    let output = document.getElementById('output');
    output.innerHTML = "П'яте завдання<br>";

    output.innerHTML += randomFloat(1.0, 5.0) + "<br>";
    output.innerHTML += randomFloat(1.0, 5.0) + "<br>";
    output.innerHTML += randomFloat(1.0, 5.0) + "<br>";

    output.innerHTML += "<br>"; 
}

function task4_sixth() {
    let output = document.getElementById('output');
    output.innerHTML = "Шосте завдання<br>";

    output.innerHTML += randomInteger(1, 5) + "<br>";
    output.innerHTML += randomInteger(1, 5) + "<br>";
    output.innerHTML += randomInteger(1, 5) + "<br>";

    output.innerHTML += "<br>";
}

function readFloatNumber() {
    return parseFloat(prompt("Введіть число з плаваючою комою:", 0));
}

function randomFloat(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
