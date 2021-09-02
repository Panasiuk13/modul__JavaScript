//import welcome from 'module.js';

//this
function lengthToConsole() {
  console.log(this.length);
}

lengthToConsole();

lengthToConsole.call('Console');

lengthToConsole.call([0,1,2,3]);

function summToConsole(x, y) {
   console.log(this.num + x + y) ;
}

summToConsole.call({num:10},5,5);

//------////пседомассив arguments

function consoleToArguments() {
   console.log(arguments) ;
}
consoleToArguments(1, false, {num:10}, ['hello'], 'cat');


//одалживание метода

function test() {
    let args = [].slice.call(arguments);

    console.log(args);

}
test('dog', 'cat');


//rest

function argumentsNewStyle(hi,...arg) {
   console.log(hi,arg) ;
}
argumentsNewStyle('hello', 'dog', 'adukar');

///srelochnye


const f1 = () => {
    console.log('it is function f1');
};
f1();

const f2 = (x, y) => console.log(`summ`);
{}
f2(2,54);

//dectryktyrizacia


let person = {
    name:'Ben',
    age: 34,
    gender: 'male',
    company : 'google',
};
let {name, age, gender} = person;
console.log(name, age, gender);


//spread operator


let arr = ['p', 'l'];

let comp = ['A', 'p',...arr ,'e'];
console.log(comp.join(''));

//symbol

let sym1 = Symbol();
let sym2 = Symbol();
console.log(sym1 === sym2);

//welcome('ben');