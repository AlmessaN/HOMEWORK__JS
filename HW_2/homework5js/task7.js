// Запитуємо користувача, скільки абзаців потрібно вивести
let numParagraphs = prompt("Скільки абзаців вивести?");

// Перевіряємо, щоб користувач ввів число
if (isNaN(numParagraphs)) {
  alert("Введено неправильне значення");
} else {
  // Перетворюємо введене значення на число
  numParagraphs = parseInt(numParagraphs);
  
  // Створюємо абзаци
  for (let i = 1; i <= numParagraphs; i++) {
    // Створюємо елементи заголовка і параграфа
    let heading = document.createElement('h3');
    let paragraph = document.createElement('p');
    
    // Задаємо текст для заголовка і параграфа
    heading.innerText = `Абзац ${i}`;
    paragraph.innerText = `Це абзац номер ${i}.`;
    
    // Створюємо блок абзацу і додаємо до нього заголовок і параграф
    let block = document.createElement('div');
    block.appendChild(heading);
    block.appendChild(paragraph);
    
    // Додаємо блок абзацу на сторінку
    document.body.appendChild(block);
  }
}
