let category = prompt("Введіть категорію водійських прав (A, B або C):");

switch (category) {
  case "A":
    console.log("Мотоцикл");
    break;
  case "B":
    console.log("Легковий автомобіль");
    break;
  case "C":
    console.log("Вантажний автомобіль");
    break;
  default:
    console.log("Невірно введена категорія водійських прав.");
}
