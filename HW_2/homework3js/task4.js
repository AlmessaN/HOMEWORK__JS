let age = prompt("Введіть свій вік:");

if (age < 6) {
  console.log("Ви дитина у садочку.");
} else if (age < 18) {
  console.log("Ви школяр.");
} else if (age < 24) {
  console.log("Ви студент.");
} else if (age < 60) {
  console.log("Ви працівник.");
} else {
  console.log("Ви пенсіонер.");
}
