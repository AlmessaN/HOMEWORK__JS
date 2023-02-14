let a = parseFloat(prompt('Введіть довжину у сантиметрах', '0'));

let metr = a/100;

let kilmetr = metr/1000;

document.write(`<h1>Сантиметри = ${a}</h1>`);
document.write(`<h1>Метри = ${metr}</h1>`);
document.write(`<h1>Кілометри = ${kilmetr.toFixed(5)}</h1>`);