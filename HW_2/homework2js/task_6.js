let a = parseInt(prompt('Введіть вартість першого товару', '0'));
let b = parseInt(prompt('Введіть кількість першого товару', '0'));
let d = parseInt(prompt('Введіть вартість другого товару', '0'));
let e = parseInt(prompt('Введіть кулькість другого товару', '0'));
let f = parseInt(prompt('Введіть вартість третього товару', '0'));
let g = parseInt(prompt('Введіть кількість третього товару', '0'));

let first = a*b;
let sec = d*e;
let ther = f*g;

let all = first+sec+ther;

document.write(`<h1>Перший товар = ${first.toFixed(2)}</h1>`);
document.write(`<h1>Другий товар = ${sec.toFixed(2)}</h1>`);
document.write(`<h1>Третій товар = ${ther.toFixed(2)}</h1>`);

document.write(`<h1>Загальна вартість = ${all.toFixed(2)}</h1>`);
