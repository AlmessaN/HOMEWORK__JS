function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

document.write(`<h1>Випадковий номер місяця = ${randomInteger(1, 12)}</h1>`);
document.write(`<h1>Випадковий номер дня = ${randomInteger(0, 6)}</h1>`);

