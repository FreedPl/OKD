function task1() {
    let output = document.getElementById('output');
    output.innerHTML = "Перше завдання<br>";

    let user = {};
    output.innerHTML += "Створений пустий об'єкт: " + JSON.stringify(user) + "<br>";

    user.name = "Sanik";
    output.innerHTML += "Додане ім'я: " + user.name + "<br>";

    user.surname = "Kavun";
    output.innerHTML += "Додане Призвіще: " + user.surname + "<br>";

    user.name = "Pete";
    output.innerHTML += "Ім'я змінено на: " + user.name + "<br>";

    delete user.name;
    output.innerHTML += "Ім'я видалено, об'єкт: " + JSON.stringify(user) + "<br>";

    delete user.surname;
    output.innerHTML += "Призвіще видалено, об'єкт: " + JSON.stringify(user) + "<br>";

    if (Object.keys(user).length === 0) {
        output.innerHTML += "Об'єкт повністю зруйновано<br>";
    }

    output.innerHTML += "<br>";
}

function task2() {
    let output = document.getElementById('output');
    output.innerHTML = "Друге завдання<br>";

    let schedule = {};
    output.innerHTML += "Статус 1: " + verify_on_empty(schedule) + "<br>";

    schedule["8:30"] = "get up";
    output.innerHTML += "Статус 2: " + verify_on_empty(schedule) + "<br>";

    output.innerHTML += "<br>";
}

function task3() {
    let output = document.getElementById('output');
    output.innerHTML = "Третє завдання<br>";

    const user = {
        name: "John"
    };

    output.innerHTML += "До зміни: " + user.name + "<br>";
    user.name = "Pete";
    output.innerHTML += "Після зміни: " + user.name + "<br>";

    output.innerHTML += "<br>";
}

function task4() {
    let output = document.getElementById('output');
    output.innerHTML = "Четверте завдання<br>";

    let salaries = {
        John: 140,
        Ann: 200,
        Pete: 200
    };

    output.innerHTML += "Зарплата Джона: " + salaries.John + "<br>";
    output.innerHTML += "Зарплата Анни: " + salaries.Ann + "<br>";
    output.innerHTML += "Зарплата Пете: " + salaries.Pete + "<br>";

    let sum = 0;

    for (let key in salaries) {
        sum += salaries[key];
        output.innerHTML += "Сума в циклі: " + sum + "<br>";
    }

    output.innerHTML += "Загальна сума: " + sum + "<br>";

    output.innerHTML += "<br>";
}

function task5() {
    let output = document.getElementById('output');
    output.innerHTML = "П'яте завдання<br>";

    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };

    output.innerHTML += "Ширина: " + menu.width + "<br>";
    output.innerHTML += "Висота: " + menu.height + "<br>";
    output.innerHTML += "Назва: " + menu.title + "<br>";

    output.innerHTML += "Математична магія...<br>";
    multiply_numbers(menu);
    output.innerHTML += "Результат...<br>";
    output.innerHTML += "Ширина: " + menu.width + "<br>";
    output.innerHTML += "Висота: " + menu.height + "<br>";
    output.innerHTML += "Назва: " + menu.title + "<br>";

    output.innerHTML += "<br>";
}

// Додаткові функції для task2 та task5:

function verify_on_empty(obj) {
    return Object.keys(obj).length === 0 ? "Порожній" : "Не порожній";
}

function multiply_numbers(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}
