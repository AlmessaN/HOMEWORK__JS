// Створити таблицю
const table = document.createElement('table');

// Створити 3 рядки
for (let i = 0; i < 3; i++) {
  const row = document.createElement('tr');

  // Створити 7 стовпців в кожному рядку
  for (let j = 0; j < 7; j++) {
    const cell = document.createElement('td');
    const cellText = document.createTextNode('Комірка');
    cell.appendChild(cellText);
    row.appendChild(cell);
  }

  // Додати рядок до таблиці
  table.appendChild(row);
}

// Додати таблицю до сторінки
document.body.appendChild(table);
