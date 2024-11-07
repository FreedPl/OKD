
function task5_first() {
    document.getElementById('output').innerHTML = "Завдання 1: " + firstLetterUppercase("дімасік");
}


function task5_second() {
    document.getElementById('output').innerHTML = `
        Завдання 2:<br>
        Спам 1: ${isSpamDetected("Купляй пігулки від розуму!!!")}<br>
        Спам 2: ${isSpamDetected("будь краще всіх!")}<br>
        Спам 3: ${isSpamDetected("Купляй і будеш маладцьом!")}
    `;
}


function task5_third() {

    document.getElementById('output').innerHTML = `
        Завдання 3:<br>
        Обрізаний текст 1: ${shortenText("Ось, що мені хотілося б сказати на цю тему:", 20)}<br>
        Обрізаний текст 2: ${shortenText("Усім привіт!", 20)}
    `;
}


function task5_fourth() {

    document.getElementById('output').innerHTML = `
        Завдання 4:<br>
        Витягнена сума з '$120': ${extractAmount('$120') === 120 ? 'True' : 'False'}
    `;
}


function firstLetterUppercase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


function isSpamDetected(text) {
    const spamWords = ['viagra', 'xxx', 'Купляй'];
    return spamWords.some(word => text.toLowerCase().includes(word.toLowerCase())) ? 'Спам' : 'Не спам';
}


function shortenText(text, maxLength) {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}


function extractAmount(str) {
    return parseFloat(str.replace(/[^\d.-]/g, ''));
}
