let x = 11;
let y = 23;

y = [x, x = y][0];
x = [y, y = x][0];

console.log(y, x);