let age = parseInt(prompt("Введіть свій вік:"));

if (age < 6) {
  document.write("<h1>Ви дитина у садочку.</h1>");
} else if (age < 18) {
  document.write("<h1>Ви школяр.</h1>");
} else if (age < 24) {
  document.write("<h1>Ви студент.</h1>");
} else if (age < 60) {
  document.write("<h1>Ви працівник.</h1>");
} else {
  document.write("<h1>Ви пенсіонер.</h1>");
}
