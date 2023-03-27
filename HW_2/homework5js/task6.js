// Створити 3 таблиці
for (let t = 0; t < 3; t++) {
  const table = document.createElement('table');

  // Створити лічильник для номерації комірок
  let counter = 1;

  // Створити 3 рядки
  for (let i = 0; i < 3; i++) {
    const row = document.createElement('tr');

    // Створити 3 стовпців в кожному рядку
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement('td');
      const cellText = document.createTextNode(counter);
      cell.appendChild(cellText);
      row.appendChild(cell);

      // Збільшити лічильник на 1
      counter++;
    }

    // Додати рядок до таблиці
    table.appendChild(row);
  }

  // Додати таблицю до сторінки
  document.body.appendChild(table);
}
