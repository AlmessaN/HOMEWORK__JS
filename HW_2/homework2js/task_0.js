let a = parseFloat(prompt('a=', '0'));
let b = parseFloat(prompt('b=', '0'));

let s1 = a+12+b;
document.write(`<h1>S1 = ${s1}</h1>`);

let secFirst = a+b;
let secSecond = 2*a;
let secTh = secFirst/secSecond;

let s2 = Math.sqrt(secTh);
document.write(`<h1>S2 = ${s2.toFixed(2)}</h1>`);