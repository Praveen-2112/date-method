let date = new Date();
document.write(`Date generated is ${date}`, "<br>", "<br>");
document.write(`GET METHODS FROM ${date}`, "<br>", "<br>")

document.write(` getDate : ${date.getDate()}`, "<br>");
document.write(` getDay : ${date.getDay()}`, "<br>");
document.write(` getFullYear : ${date.getFullYear()}`, "<br>");
document.write(` getHours : ${date.getHours()}`, "<br>");
document.write(` getMilliseconds : ${date.getMilliseconds()}`, "<br>");
document.write(` getMonth : ${date.getMonth()}`, "<br>");
document.write(` getMinutes : ${date.getMinutes()}`, "<br>");
document.write(` getTime : ${date.getTime()}`, "<br>");
document.write(` getSeconds : ${date.getSeconds()}`, "<br>");
document.write(` getTimezoneOffset : ${date.getTimezoneOffset()}`, "<br>");
document.write(` getUTCDate : ${date.getUTCDate()}`, "<br>");
document.write(` getUTCDay : ${date.getUTCDay()}`, "<br>");
document.write(` getUTCFullYear : ${date.getUTCFullYear()}`, "<br>");
document.write(` getUTCHours : ${date.getUTCHours()}`, "<br>");
document.write(` getUTCMilliseconds : ${date.getUTCMilliseconds()}`, "<br>");
document.write(` getUTCMonth : ${date.getUTCMonth()}`, "<br>");
document.write(` getUTCMinutes : ${date.getUTCMinutes()}`, "<br>", "<br>");

document.write(`NOW , PARSE METHODS`, "<br>", "<br>");

document.write(` Date.now : ${Date.now()}`, "<br>");
document.write(` Date.parse(May 28,1997) : ${Date.parse("May 28,1997")}`, "<br>");
document.write(` valueOf : ${date.valueOf()}`, "<br>", "<br>");

document.write(`CONVERSION METHODS (${date})`, "<br>", "<br>");

document.write(` toString : ${date.toString()}`, "<br>");
document.write(` toDateString : ${date.toDateString()}`, "<br>");
document.write(` toTimeString : ${date.toLocaleString()}`, "<br>");
document.write(` toISOString : ${date.toISOString()}`, "<br>");
document.write(` JSON : ${date.toJSON()}`, "<br>");
document.write(` toLocaleString : ${date.toLocaleString()}`, "<br>");
document.write(` toLocaleDateString : ${date.toLocaleDateString()}`, "<br>");
document.write(` toLocaleTimeString : ${date.toLocaleTimeString()}`, "<br>");
document.write(` toUTCString : ${date.toUTCString()}`, "<br>");
document.write(` Date.UTC : ${Date.UTC(2017, 05, 28)}`, "<br>", "<br>");

document.write(`SET METHODS (${date})`, "<br>", "<br>");
let a = new Date();
a.setDate(15);
document.write(`setDate(15): ${a}`, "<br>");

let b = new Date();
b.setMonth(9);
document.write(`setMonth(9): ${b}`, "<br>");

let c = new Date();
c.setHours(15);
document.write(`setHours(15): ${c}`, "<br>");

let d = new Date();
d.setFullYear(2000);
document.write(`setFullYear(2000): ${d}`, "<br>");

let e = new Date();
e.setMinutes(45);
document.write(`setMinutes(45): ${e}`, "<br>");

let f = new Date();
f.setSeconds(45);
document.write(`setSeconds(45): ${f}`, "<br>");

let g = new Date();
g.setMilliseconds(45);
document.write(`setMilliseconds(400): ${g}`, "<br>");

let h = new Date();
h.setTime(48778978799898);
document.write(`setTime(4877897879): ${h}`, "<br>");

let i = new Date();
i.setUTCDate(15);
document.write(`setUTCDate(15): ${i}`, "<br>");

let j = new Date();
j.setUTCMonth(9);
document.write(`setUTCMonth(9): ${j}`, "<br>");

let k = new Date();
k.setUTCHours(15);
document.write(`setUTCHours(15): ${k}`, "<br>");

let l = new Date();
l.setUTCFullYear(2000);
document.write(`setUTCFullYear(2000): ${l}`, "<br>");

let m = new Date();
m.setUTCMinutes(45);
document.write(`setUTCMinutes(45): ${m}`, "<br>");

let o = new Date();
o.setUTCSeconds(45);
document.write(`setUTCSeconds(45): ${o}`, "<br>");

let p = new Date();
p.setUTCMilliseconds(45);
document.write(`setUTCMilliseconds(400): ${p}`, "<br>");