let a = parseInt(prompt('Введіть кількість секунд', '0'));

let hv = a/60;
let hours = hv/3600;

document.write(`<h1>Хвилин = ${hv.toFixed(2)}</h1>`);
document.write(`<h1>Годин = ${hours.toFixed(5)}</h1>`);
