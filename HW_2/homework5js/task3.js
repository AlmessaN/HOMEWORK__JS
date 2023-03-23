// отримуємо посилання на елемент div з id "table"
const tableDiv = document.getElementById("table");

// створюємо елемент table та додаємо його до елемента div з id "table"
const tableElement = document.createElement("table");
tableDiv.appendChild(tableElement);

// створюємо рядок таблиці та додаємо його до таблиці
const rowElement = document.createElement("tr");
tableElement.appendChild(rowElement);

// створюємо 7 стовпців та додаємо їх до рядка таблиці
for (let i = 1; i <= 7; i++) {
  const columnElement = document.createElement("td");
  columnElement.innerHTML = `${i}`;
  rowElement.appendChild(columnElement);
}