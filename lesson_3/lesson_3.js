//function declaraition


/*function sayHello() {
    console.log('hello world!');
}

sayHello();*/

//function calc(n) {
    //console.log(n * 3);
//}

//calc(2);

/*function getUser(name) {
    return 'Hello, ' + name + '!';
}
console.log(getUser('Andrew'));*/

//function exprestion

/*let car = function (x) {
   return x**x;
}

console.log(car(3));*/


/*function fabric(user = 'Andrew', car = 'opel', position = 'manager') {
 console.log('Hello, ' + user + ' you -' + position + ' and are you ' + car)
}
fabric('Angelina', undefined, 'director');*/

/*let global = 'я, глобальная!!!';
function get() {
    let local = 'я локальная!';
    let global = 'я, глобальная 2!!!';

    console.log(global);
    console.log(local);
}

get();
console.log(global);
//console.log(local);*/


/*for (let x =0; x < 3; x++) {
    console.log('цикл' + x);
}

console.log(x);*/

/*console.log(log);
console.log(qwe);


var log = 'good buy';*/

/*const user = ' andrew';

user = 'alex';

console.log(user);*/

/*fabric('Angelina', undefined, 'director');

let fabric = function (user = 'Andrew', car = 'opel', position = 'manager') {
    console.log('Hello, ' + user + ' you -' + position + ' and are you ' + car)
}*/

let x = 0;
function recurs(){
    if( x < 3){
        x++;
    console.log('глубина рекурси' + x);
    recurs();
    }
}
//recurs();

/*function shop(param) {
  return param + 'был в магазине!'
};

function jobs(param) {
    return shop(param)
};

console.log(jobs('Anderw'));*/

