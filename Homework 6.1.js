function checkProbabilityTheory(count) { // Створив функцію яка перевіряє вхідний параметр. Поставив 100 але можна і нуль
    if (count <= 100) {
        console.log("Кількість чисел повинна бути більше 99.");
        return;
    }

    let evenCount = 0; // Створив дві змінні для цілих та не цілих чисел
    let oddCount = 0;

    for (let i = 0; i < count; i++) { // Запустив звичайний цикл та генератор випадкових чисел
        const num = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    const evenPercentage = (evenCount / count) * 100; // Тут рахував відсоток парних та непарних чисел
    const oddPercentage = (oddCount / count) * 100;

    console.log(`Згенеровані числа: ${count}`);
    console.log(`Парні числа: ${evenCount}`);
    console.log(`Непарні числа: ${oddCount}`);
    console.log(`Відсоток парних чисел: ${evenPercentage.toFixed(2)}%`);
    console.log(`Відсоток непарних чисел: ${oddPercentage.toFixed(2)}%`);
}

checkProbabilityTheory(500);
