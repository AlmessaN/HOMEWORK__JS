let num1 = prompt("Введіть перше число:");
let num2 = prompt("Введіть друге число:");

// Перевірка на валідність введення
if (isNaN(num1) || isNaN(num2)) {
  alert("Введені значення не є числами!");
} else {
  num1 = Number(num1);
  num2 = Number(num2);

  // Переконуємось, що num1 менше за num2
  if (num1 > num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
  }

  let sum = 0;

  // Проходимо циклом по всіх непарних числах між num1 та num2
  for (let i = num1; i <= num2; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }

  alert("Сума непарних чисел між " + num1 + " та " + num2 + " дорівнює " + sum);
}