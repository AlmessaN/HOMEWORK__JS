let childName1 = prompt('Як звати дитину',);
let candies1 = parseInt(prompt('Скільки цукерок у першої дитини?', '0'));

let childName2 = prompt('Як звати дитину');
let candies2 = parseInt(prompt('Скільки цукерок у другої дитини?', '0'));

if (candies1 > candies2) {
  document.write(`<h1>${childName1} має більше цукерок</h1>`);
} else if (candies2 > candies1) {
    document.write(`<h1>${childName2} має більше цукерок</h1>`);
} else {
    document.write(`<h1>"Кількість цукерок у дітей однакова"</h1>`);
}