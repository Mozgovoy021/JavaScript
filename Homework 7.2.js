var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    "Розбити скло": "200 грн",

    price() {
        return Object.values(this)
            .filter(value => typeof value === 'string')
            .map(value => parseFloat(value.replace(' грн', ''))) 
            .reduce((sum, current) => sum + current, 0) + ' грн';
    },

    minPrice() {
        return Math.min(...Object.values(this)
            .filter(value => typeof value === 'string')
            .map(value => parseFloat(value.replace(' грн', '')))) + ' грн';
    },

    maxPrice() {
        return Math.max(...Object.values(this)
            .filter(value => typeof value === 'string')
            .map(value => parseFloat(value.replace(' грн', '')))) + ' грн';
    }
};

console.log('Загальна вартість: ' + services.price()); 
console.log('Мінімальна вартість: ' + services.minPrice()); 
console.log('Максимальна вартість: ' + services.maxPrice()); 
