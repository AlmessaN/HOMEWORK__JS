let a = parseInt(prompt('Введіть кількість товару', '0'));
let b = parseFloat(prompt('Введіть ціну товару', '0'));

let sum = a*b;

let pdv = sum*0.005;

document.write(`<h1>Загальна вартість = ${sum}</h1>`);
document.write(`<h1>Вартість ПДФ = ${pdv.toFixed(2)}</h1>`);