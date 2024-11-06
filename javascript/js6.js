// Завдання 1: Масиви і посилання
function task6_first() {
    let fruits = ["Гранат", "Манго", "Персик"];
    let shoppingCart = fruits;
    shoppingCart.push("Драконовий фрукт");

    // Виведення результату на сторінку
    document.getElementById('output').innerHTML = `
        Завдання 1:<br>
        Довжина масиву fruits після додавання елементу: ${fruits.length}<br>
        Масив містить: ${JSON.stringify(fruits)}.
    `;
}

// Завдання 2: Операції з масивами
function task6_second() {
    let sports = ["Футбол", "Баскетбол"];
    sports.push("Теніс");
    sports[Math.floor((sports.length - 1) / 2)] = "Бейсбол";
    let removedSport = sports.shift(); // Видаляє перший елемент
    sports.unshift("Волейбол", "Хокей"); // Додає нові елементи на початок масиву

    // Виведення результату на сторінку
    document.getElementById('output').innerHTML = `
        Завдання 2:<br>
        Видалено перший елемент: ${removedSport}<br>
        Оновлений масив: ${JSON.stringify(sports)}<br>
        Остаточний вигляд масиву: ["Волейбол", "Хокей", "Бейсбол", "Теніс"].
    `;
}