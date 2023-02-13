let a = parseFloat(prompt('Введіть значення а', '0'));
let b = parseFloat(prompt('Введіть значення b', '0'));

let sum = a+b;
let suma = document.getElementById("suma");
suma.innerHTML('<h2>${sum}</h2>');