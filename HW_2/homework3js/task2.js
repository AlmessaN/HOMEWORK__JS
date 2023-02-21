// Запитуємо ціну товару та кількість грошей
let price = parseFloat(prompt("Введіть ціну товару:"));
let money = parseFloat(prompt("Введіть кількість грошей:"));

// Перевіряємо, чи достатньо грошей для покупки товару
if (money < price) {
  document.write("Вибачте, у вас недостатньо грошей для покупки товару.");
} else {
  // Обчислюємо залишок грошей після покупки товару
  let change = money - price;

  if (change >= 4) {
    // Якщо є достатньо грошей, пропонуємо купити лотерею
    let answer = confirm(`У вас залишиться ${change} грн. Хочете купити лотерею за 4 грн?`);

    if (answer) {
      document.write("Дякуємо за покупку лотереї! Бажаємо вам удачі!");
    } else {
      document.write("Дякуємо за покупку товару!");
    }
  } else {
    // Якщо залишок недостатній, не пропонуємо купувати лотерею
    document.write(`Дякуємо за покупку товару! У вас залишиться ${change} грн.`);
  }
}
