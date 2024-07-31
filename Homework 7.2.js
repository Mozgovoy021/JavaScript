var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    "Розбити скло": "200 грн",

    price() {
        return Object.values(this)
            .map(value => parseFloat(value))
            .reduce((sum, current) => sum + current, 0) + ' грн';
    },

    minPrice() {
        return Math.min(...Object.values(this)
            .map(value => parseFloat(value))) + ' грн';
    },

    maxPrice() {
        return Math.max(...Object.values(this)
            .map(value => parseFloat(value))) + ' грн';
    }
};

// Перевірка роботи методів
console.log('Загальна вартість: ' + services.price());
console.log('Мінімальна вартість: ' + services.minPrice());
console.log('Максимальна вартість: ' + services.maxPrice());
