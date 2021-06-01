const balance = [
    { value: 1250, description: 'Sold Litecoin', user: 'barry' },
    { value: -1000, description: 'Rent', user: 'barry' },
    { value: 5300, description: 'Monthly salary', user: 'barry' },
    { value: 800, description: 'Sold Bitcoin', user: 'barry' },
    { value: -1900, description: 'New Smartphone', user: 'barry' },
    { value: -20, description: 'Buy chocolate', user: 'tina' },
    { value: -125, description: 'Buy guitar', user: 'tina' },
    { value: -2200, description: 'New Laptop', user: 'barry' },
];

const userLimits = {
    barry: 1500,
    tina: 100,
};

const getLimit = (user) => userLimits?.[user] ?? 0;

function addExpense(value, description, user = 'barry') {
    user = user.toLowerCase();

    if (value <= getLimit(user)) {
        balance.push({ value: -value, description, user });
    }
}
addExpense(10, 'Kebab');
addExpense(100, 'Going to movies', 'tina');

console.log(balance);

function checkExpenses() {
    for (const item of balance) {
        if (item.value < -getLimit(item.user)) {
            item.flag = 'limit';
        }
    }
}
checkExpenses();

function logBigExpenses(bigLimit) {
    let output = '';
    for (const item of balance)
        output += item.value <= -bigLimit ? `${item.description} / ` : '';

    output = output.slice(0, -2);
    console.log(output);
}
console.log(balance);
logBigExpenses(500);
