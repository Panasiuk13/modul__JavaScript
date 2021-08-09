const number1 = Number(window.prompt('Type a number (1):'));
const number2 = Number(window.prompt('Type a number (2):'));

if (number1 >= number2) {
    console.log(number1);
} else {
    console.log(number2);
}


var year = Number(prompt("Укажите вораст"));
var test = year >= Number(prompt("Укажите вораст")) ? console.log(year) : console.log(test);


const x = Number(prompt("Укажите вораст"));
switch (x) {
    case 1:
        alert('not ok!');
        break;
    case 2:
        alert('bad!');
        break;
    case 3:
        alert('ok!');
        break;
    default:
        alert('Your number is: ' + x);
        break;
}

