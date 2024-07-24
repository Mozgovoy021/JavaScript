function pow(x, y) { //обявив функцію
    let start = 1; // Ініціалізував result як початкове значення для множення
    for (let i = 0; i < y; i++) { // запустив звичайний цикл який був описаний в матеріалах
        start *= x; // Тут просто перемножив значення, тобто в нашому випадку привів у ступінь
    }
    return start; // Ну і повернув значення яке вийшло після завершення циклу
}

console.log(pow(2, 3)); //Тут вже передав значення в функцію та вивів результат


// Варіант коли ми маємо відємні числа. Але це ми не вивчали Math.abs()
function pow(x, y) {
    if (y === 0) return 1;
    let start = 1;
    let positiveExponent = Math.abs(y);

    for (let i = 0; i < positiveExponent; i++) {
        start *= x;
    }

    if (y < 0) {
        start = 1 / start;
    }

    return start;
}