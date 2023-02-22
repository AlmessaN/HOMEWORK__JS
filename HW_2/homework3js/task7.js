let month = parseInt(prompt("Введіть номер місяця:"));

if (month < 1 || month > 12) {
  document.write("<h1>Некоректний номер місяця</h1>");
} else if (month >= 3 && month <= 5) {
  document.write("<h1>Весна</h1>");
} else if (month >= 6 && month <= 8) {
  document.write("<h1>Літо</h1>");
} else if (month >= 9 && month <= 11) {
  document.write("<h1>Осінь</h1>");
} else {
  document.write("<h1>Зима</h1>");
}
