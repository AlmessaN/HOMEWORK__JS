// const n = parseInt(prompt("Введіть кількість випадкових чисел:"));
// const numbers = [];

// for (let i = 0; i < n; i++) {
//   numbers.push(Math.floor(Math.random() * 100) + 1);
// }

// let output = "";

// document.write(`<ul>`)
// for (let i = 0; i <numbers.length; i++) {
//   if (i === 0) {
//     output += `<li>${numbers[i]}</li>`;
//   } else if (i === numbers.length - 1) {
//     output += `<li>${numbers[i]}</li>`;
//   } else {
//     output += `<li>${numbers[i]}</li>`;
//   }
// }
// document.write(`</ul>`)



		// Створюємо змінні 
		const quanNumbers = parseInt(prompt("Кількість чисел", ""))
		document.write(`<ul>`)
		//
		for (let i = 1; i <= quanNumbers; i++) {
			const num = 1 + Math.floor(Math.random() * (100 - 1 + 1))
			document.write(`<li>${num}</li>`)
		}
		document.write(`</ul>`)
	