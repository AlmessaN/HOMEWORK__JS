// Масиви з можливими зображеннями для кожної позиції
const pos1Images = ["image1", "image2", "image3", "image4"];
const pos2Images = ["image1", "image2", "image3", "image4"];
const pos3Images = ["image1", "image2", "image3", "image4"];

// Випадково вибираємо зображення для кожної позиції
let pos1 = pos1Images[Math.floor(Math.random() * 4)];
let pos2 = pos2Images[Math.floor(Math.random() * 4)];
let pos3 = pos3Images[Math.floor(Math.random() * 4)];

// Виводимо зображення
console.log(pos1 + " " + pos2 + " " + pos3);

// Визначаємо виграш
let winnings = 0;
switch (true) {
  case pos1 === pos2 && pos2 === pos3:
    // Виграш, якщо всі три зображення однакові
    switch (pos1) {
      case "image1":
        winnings = 100;
        break;
      case "image2":
        winnings = 200;
        break;
      case "image3":
        winnings = 500;
        break;
      case "image4":
        winnings = 1000;
        break;
    }
    break;
  case pos1 === pos2 || pos1 === pos3 || pos2 === pos3:
    // Виграш, якщо два зображення однакові
    winnings = 10;
    break;
  default:
    // Не було виграшу
    winnings = 0;
}

// Виводимо результат
if (winnings > 0) {
  console.log("Ви виграли " + winnings + " грн!");
} else {
  console.log("Ви програли. Спробуйте ще раз!");
}