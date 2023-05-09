let guessed = false;
let min = 1;
let max = 100;
let guess;

while (!guessed) {
  guess = Math.floor((min + max) / 2);
  guessed = confirm("Чи загадане число менше або дорівнює " + guess + "?");
  
  if (guessed) {
    alert("Я вгадав число!");
  } else {
    let tooHigh = confirm("Чи загадане число менше " + guess + "?");
    if (tooHigh) {
      max = guess - 1;
    } else {
      min = guess + 1;
    }
  }
}