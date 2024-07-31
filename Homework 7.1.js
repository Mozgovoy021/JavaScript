// Створив об'єкт з трьома властивостями і методом getInfo
let QaEngineer = {
    name: 'Max',
    age: 30,
    Position: 'Team Lead',

    // Метод для виведення всіх властивостей об'єкта
    getInfo: function () {
        for (let key in this) {
            // Виводимо ключ і значення, перевіряючи тільки власні властивості
            if (this.hasOwnProperty(key)) {
                console.log(key + ': ' + this[key]);
            }
        }
    }
};

QaEngineer.getInfo();
QaEngineer.Company = 'PrivatBank'; // Нова Властивість
QaEngineer.getInfo(); //Знову вивід але з новою властивістю

