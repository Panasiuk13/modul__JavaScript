/*let person = {
    name: {
        first: "Alessandro",
        second: "Nesta"
    },
    birth: {
        year: "1975",
        place: "Italy"
    }
};

console.log(person.name.first);
person.birth.place = "Rome", "Italy";
console.log(person.birth.place);*/


/*let machine = {
    type: "Coffe gride",
    makeSound: function () {
        console.log("DRRRRR!!!");

    }
};

machine.sayHello = function () {
    console.log("Hello") ;
};

machine.makeSound();
machine.sayHello();

console.log(machine);


let person = {
    getUser(){
        console.log("I'm Grut!");
    }

};

grut.getUser();


let arr = [1, 2, 3, 4, 5];
console.log(typeof arr);*/



/*let user = {
    name: "Олег",
    introduce: function () {
        console.log("меня зовут" + this.name );
    }
}
user.introduce();*/


let circelA = {x: 10, y: 12};
let circelB = {x: -4, y: 2};

function f() {
    console.log("X: " + this.x);
    console.log("Y: " + this.y);
}
circelA.printXY = coords;
circelB.teelCoords = coords;

circelA.printXY();
circelB.teelCoords();



