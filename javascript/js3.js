function task3_first() {
    let output = document.getElementById('output');
    output.innerHTML = "Перше завдання<br>";

    let obj = {};

    function A() { return obj; }

    function B() { return obj; }

    let a = new A();
    let b = new B();

    output.innerHTML += "Чи однакові об'єкти a та b? " + (a == b) + "<br>"; // true

    output.innerHTML += `
        В цьому випадку обидва конструктори A та B повертають один і той самий об'єкт obj,
        тому результати new A() і new B() посилаються на однаковий об'єкт.
        Уявіть, що номер екстреного виклику "112" перенаправляє всі дзвінки до єдиної служби допомоги.
        Хоча дзвінки здійснюються різними людьми, всі вони направляються до єдиного місця.
        Те ж саме відбувається в цьому коді: нові об'єкти вказують на один і той самий об'єкт.<br>
    `;
    output.innerHTML += "<br>";
}

function task3_second() {
    let output = document.getElementById('output');
    output.innerHTML = "Друге завдання<br>";

    let calculator = new SimpleCalculator();

    calculator.read();

    output.innerHTML += "Сума: " + calculator.sum() + "<br>";
    output.innerHTML += "Добуток: " + calculator.mul() + "<br>";

    output.innerHTML += "<br>";

    // Опис: Клас SimpleCalculator створює об'єкт з методами read, sum і mul.
    // Метод read запитує у користувача два числа, sum повертає їх суму, а mul — їх добуток.
}

function task3_third() {
    let output = document.getElementById('output');
    output.innerHTML = "Третє завдання<br>";

    let g_accumulator = new Accumulator(1);

    g_accumulator.read();
    g_accumulator.read();

    output.innerHTML += "Накопичена сума: " + g_accumulator.value + "<br>";

    output.innerHTML += "<br>";

    // Опис: У класі Accumulator значення починається з певного індексу (1). Метод read дозволяє додавати нові значення до цього індексу,
    // тим самим накопичуючи значення після кожного виклику.
}

class SimpleCalculator {
    constructor() {
        this.a = 0;
        this.b = 0;
    }

    read() {
        this.a = +prompt("Введіть перше число:", 0);
        this.b = +prompt("Введіть друге число:", 0);
    }

    sum() {
        return this.a + this.b;
    }

    mul() {
        return this.a * this.b;
    }
}

class Accumulator {
    constructor(start) {
        this.value = start;
    }

    read() {
        let num = +prompt("Введіть число для додавання:", 0);
        this.value += num;
    }
}
