
let User = function (name) {
   this.name = name;

   this.getName = function () {
       getReversName(name);
      console.log(this.name);
   };

   getReversName = function (name) {
       let revers = name.split('').reverse().join('');
     console.log(revers);
   }
};

let marina = new User('Марина');
let ben = new User('Бен');

marina.getName();
ben.getName();

//classes

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getFullName(){
        return ` I am ${this.name}, is ${this.age} year`;
    }
}

class Driver extends Person{
    constructor(name, age, numberDriveng){
        super(name, age);

        this.numberDriveng = numberDriveng;

    }
    getFullDriveng(){
        return super.getFullName() + `${this.numberDriveng}`
    }
}

let anna = new Driver('Anna', 20, 12345);

console.log(anna.getFullDriveng());


class City {
    constructor(name){
        this.name;
    }
    getCity(){
        return this.name;
    }

}

class District extends City{
    constructor(name, nameDistrict, population){
        super(name);

        this.nameDistrict = nameDistrict;
        this.population = population;




    }
    getDistrict(){
        return super.getCity() + ' ' + this.district;
    }
    setDistrict(prop){
      this[prop] = value;
    }
}
//let house = new City('house');

let mouse = new District('Mouse', 'mouse',3000);

//mouse.setDistrict('district', 'cat');

//let getChooseDistrict = mouse.setDistrict();
//console.log(getChooseDistrict);
console.log(mouse);