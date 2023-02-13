let a = parseFloat(prompt('Введіть значення а', '0'));
let b = parseFloat(prompt('Введіть значення b', '0'));
let d = parseFloat(prompt('Введіть значення с', '0'));

let s1 = a+12+b;
document.write(`<h1>S1 = ${s1}</h1>`);

let secFirst = a+b;
let secSecond = 2*a;
let secTh = secFirst/secSecond;

let s2 = Math.sqrt(secTh);

document.write(`<h1>S2 = ${s2.toFixed(2)}</h1>`);

let thSec = secFirst/d;
let s3 = Math.cbrt(thSec);
document.write(`<h1>S3 = ${s3.toFixed(2)}</h1>`);

let foSec = a/-b;
let s4 = Math.sin(foSec);
document.write(`<h1>S4 = ${s4.toFixed(2)}</h1>`);