function task2_first() {
    let output = document.getElementById('output');
    output.innerHTML = "Перше завдання<br>";

    output.innerHTML += "Створення об'єкту<br>";
    let user = {
        name: "Джон",
        go: function() { alert(this.name) }
    };
    output.innerHTML += "Об'єкт створено: " + JSON.stringify(user) + "<br>";
    output.innerHTML += "Виклик функції: ";
    user.go();  // Оскільки ми викликаємо функцію, вона відобразить alert з "Джон"

    output.innerHTML += "<br>";
}

function task2_second() {
    let output = document.getElementById('output');
    output.innerHTML = "Друге завдання<br>";

    let obj, method;

    obj = {
        go: function() { alert(this); }
    };

    obj.go();
    (obj.go)();
    (method = obj.go)();
    (obj.go || obj.stop)();

    // Пояснення цього коду
    output.innerHTML += `
        (1) та (2) викликають go з правильним this, тому що go викликається як метод об’єкта obj.<br>
        (3) Призначення obj.go змінній method розриває зв'язок між this і obj, тому this стає undefined.<br>
        (4) (obj.go || obj.stop) також призводить до втрати прив'язки this, оскільки go викликається самостійно.<br>
    `;
    output.innerHTML += "<br>";
}

function task2_third() {
    let output = document.getElementById('output');
    output.innerHTML = "Третє завдання<br>";

    output.innerHTML += "Створення об'єкту<br>";
    let user = make_user();
    output.innerHTML += "Перевірка об'єкту: " + JSON.stringify(user) + "<br>";
    output.innerHTML += "Об'єкт: " + user.ref.name + "<br>";
    alert(user.ref.name);  // Виведеться "Джон"

    output.innerHTML += "<br>";
}

function task2_fourth() {
    let output = document.getElementById('output');
    output.innerHTML = "Четверте завдання<br>";

    let calculator = {
        read() {
            this.a = +prompt("Введіть перше число:", 0);
            this.b = +prompt("Введіть друге число:", 0);
        },

        sum() {
            return this.a + this.b;
        },

        mul() {
            return this.a * this.b;
        }
    };

    output.innerHTML += "Зчитування<br>";
    calculator.read();
    output.innerHTML += "Сума: " + calculator.sum() + "<br>";
    output.innerHTML += "Добуток: " + calculator.mul() + "<br>";

    output.innerHTML += "<br>";
}

function task2_fifth() {
    let output = document.getElementById('output');
    output.innerHTML = "П'яте завдання<br>";

    let ladder = {
        step: 0,

        up() {
            this.step++;
            return this;
        },

        down() {
            this.step--;
            return this;
        },

        showStep() {
            alert(this.step); // Виводить значення кроку
            return this;
        }
    };

    ladder.up().up().down().showStep();

    output.innerHTML += "<br>";
}

// Функція для створення користувача
function make_user() {
    return {
        ref: {
            name: "Джон"
        }
    };
}
