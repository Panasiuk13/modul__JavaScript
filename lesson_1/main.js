var msg = 'It is good!';
var num = 15;

console.log(typeof(msg));
console.log(typeof(num));

var a = 10;
var b = 7;

var c = a + b;
var str = '12345';

console.log(-c);
console.log(+str);

var remains = a % b;
console.log(remains);

var stepen = a ** b;
console.log(stepen);

a++;
b--;

console.log(a, b);

a *= 3;
b += a;

console.log(a, b);

var msg = 'Привет';
var name = ' Alex';
var msg2 = ', как дела?';

var result = msg + name + msg2;

var specialText = `
Lorem
Inpsum
`;

console.log(specialText);

console.log(50 > 30);
console.log(50 < 30);

console.log(50 >= 49);
console.log(50 <= 49);

console.log(50 == 50);
console.log(50 != 40);

console.log(50 == '50');
console.log(50 === '50');

var x = 50;
x = 'str';

var flag = true;
var numStr = 123;
var str = "One,' Two";
console.log(str);
console.log(Number(flag));
console.log(Number(numStr));
console.log(Number(str));

console.log(String(flag));
console.log(String(numStr));

console.log(Boolean(numStr));
console.log(Boolean(str));