let a = parseFloat(prompt('Введіть значення а', '0'));
let b = parseFloat(prompt('Введіть значення b', '0'));

let sum = a+b;
let dob = a*b;
let chastka = a/b;

document.write(`
<table class="tablet">
<tr> 
<td><h1>Сума = ${sum}</h1></td>
</tr>
<tr> 
<td><h1>Добуток = ${dob}</h1></td>
</tr>
<tr> 
<td><h1>Частка = ${chastka}</h1></td>
</tr>
</table>
`)