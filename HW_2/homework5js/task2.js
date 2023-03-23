// отримуємо посилання на елемент div з id "prices"
const pricesDiv = document.getElementById("prices");

// створюємо 10 елементів input з атрибутом type="number" та посиланнями
for (let i = 1; i <= 10; i++) {
  const inputElement = document.createElement("input");
  inputElement.type = "number";
  inputElement.placeholder = `Ціна продукту ${i}`;
  
  // створюємо елемент span з номером продукту та посиланням
  const labelElement = document.createElement("label");
  labelElement.innerHTML = `Продукт ${i}: `;
  const linkElement = document.createElement("a");
  linkElement.appendChild(labelElement);
  
  // додаємо елементи span та input до елемента div з id "prices"
  pricesDiv.appendChild(linkElement);
  pricesDiv.appendChild(inputElement);
}
