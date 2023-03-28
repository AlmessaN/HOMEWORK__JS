// Функція, що створює таблицю
function createTable(startNum) {
  // Створюємо таблицю
  let table = document.createElement('table');
  
  // Заповнюємо таблицю рядками і стовпцями
  for (let i = 0; i < 3; i++) {
    // Створюємо рядок таблиці
    let row = document.createElement('tr');
    
    for (let j = 0; j < 3; j++) {
      // Створюємо комірку таблиці
      let cell = document.createElement('td');
      
      // Заповнюємо комірку номером
      let num = startNum + (i * 3) + j;
      cell.innerText = num;
      
      // Додаємо комірку до рядка
      row.appendChild(cell);
    }
    
    // Додаємо рядок до таблиці
    table.appendChild(row);
  }
  
  // Додаємо таблицю на сторінку
  document.body.appendChild(table);
}

// Створюємо 3 таблиці з нумерацією від 1 до 27
for (let i = 1; i <= 27; i += 9) {
  createTable(i);
}