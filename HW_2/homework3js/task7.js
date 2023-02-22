let month = parseInt(prompt("Введіть номер місяця:"));

if (month < 1 || month > 12) {
  console.log("Некоректний номер місяця");
} else if (month >= 3 && month <= 5) {
  console.log("Весна");
} else if (month >= 6 && month <= 8) {
  console.log("Літо");
} else if (month >= 9 && month <= 11) {
  console.log("Осінь");
} else {
  console.log("Зима");
}
