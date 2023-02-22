let category = prompt("Введіть категорію водійських прав (A, B або C):");

switch (category) {
  case "A":
    document.write("<h1>Мотоцикл</h1>");
    break;
  case "B":
    document.write("<h1>Легковий автомобіль</h1>");
    break;
  case "C":
    document.write("<h1>Вантажний автомобіль</h1>");
    break;
  default:
    document.write("<h1>Невірно введена категорія водійських прав.</h1>");
}
