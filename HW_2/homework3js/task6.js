let day = prompt("Введіть номер дня тижня (1-7):");

switch (day) {
  case "1":
    document.write("<h1>Понеділок</h1>");
    break;
  case "2":
    document.write("<h1>Вівторок</h1>");
    break;
  case "3":
    document.write("<h1>Середа</h1>");
    break;
  case "4":
    document.write("<h1>Четвер</h1>");
    break;
  case "5":
    document.write("<h1>П'ятниця</h1>");
    break;
  case "6":
    document.write("<h1>Субота</h1>");
    break;
  case "7":
    document.write("<h1>Неділя</h1>");
    break;
  default:
    document.write("<h1>Невірно введений номер дня тижня.</h1>");
}
