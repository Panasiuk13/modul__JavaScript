// метод toString

let number = 123;
let fload = 1.5;
let boolean = false;
let str = 'Hello';

number.toString();
boolean.toString();
str.toString();

console.log(number, boolean, str);

// parseInt(целые числа) & parseFloat(дробные числа)

let px = '14px';
let rem = '1.6rem';
let e = '1px2rem';

console.log(parseInt(px),parseFloat(rem),parseInt(e));

// toFixed

let fixed = 12345.54321;

console.log(fixed.toFixed(),fixed.toFixed(2),fixed.toFixed(4));

//math

let PI = Math.PI;
let E = Math.E;

console.log(PI, E);

//полезные Math

let random = Math.random();
let max = Math.max(123, 2, -254, 400);
let min = Math.min(123, 2, -254, 400);

console.log(random, max, min);

//string.length

let string = 'Hello, Adukar';
console.log(string.length);

// escape

let newStr = 'Это строка \n будет \t перенесена';
console.log(newStr);

//доступ к отдельныи символам

let word = 'Adukar';

console.log(word.charAt(3), word[0], word[word.length - 1]);


// toLowerCase & toUpperCase

let lower = 'Я хочу работать!!';
let upper = 'Я не хочу работать';

console.log(upper.toUpperCase(),lower.toLowerCase());

// String repeat & trim

let repeat_and_trim = 'Это строка будет  перенесена';
    console.log(repeat_and_trim.repeat(2),repeat_and_trim.trim());

// string indexOf & lastIndexOf

let index = 'я сегодня встану в 8';
console.log(index.indexOf('се'));
console.log(index.lastIndexOf('в'));
console.log(index.indexOf('т'));

//new metod search String

let includes = 'сегодня отличный день!';

console.log(includes.includes('отл'),includes.includes('вчера'));
console.log(includes.endsWith('отл'),includes.startsWith('отл'));

// charCodeAt/ fromCharCode

let x = 'xy';
console.log('xy'.charCodeAt(1));

//сравнивание строк

console.log("a" > "A", "a".charCodeAt(), "A".charCodeAt());

//интерполяция
let temp = 30;
console.log(`${temp > 25 ? 'жарко' : 'холодно'}!`);

// Date

let date = new Date(1990,1,1,0,0);

date.setFullYear(2010);
date.setMonth(6);
date.setDate(22);

console.log(date);
console.log(`
Год:${date.getFullYear()}
Месяц:${date.getMonth()}
День:${date.getDate()}`);

dateMoment = new Date();

console.log(dateMoment.getTime());

//разные способы

let dates = new Date();

console.log(dates.toLocaleDateString());
console.log(dates.toISOString());


// Date: миллисекунды от 1 января 1970

console.log(`
${Date.parse('2020-04-04')}
${Date.now()}
`);

