let person = {name:'ben',age:30, work:'student'};

let keys = Object.keys(person);
let values = Object.values(person);
let entries = Object.entries(person);
console.log(keys);
console.log(values);
console.log(entries);


/*Object.defineProperty(person, 'car',{
    enumerable: true,
    configurable: true,
    get(){
        return 'audi';
    },
    set (value){
        this.car = value;

    }

});
person.car = 'peugot';

console.log(person.car);
console.log(Object.getOwnPropertyDescriptor(person, 'car'));*/


