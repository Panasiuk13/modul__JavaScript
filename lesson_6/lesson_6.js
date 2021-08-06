//угадай число//

/*let btn = document.querySelector('button');
let input = document.querySelector('input');
let reload = document.querySelector('reload');

let rand = random(1,10);

btn.onclick = function () {
    let value = input.value;
    let result;

    if(rand === value){
        result = 'Вы угадали!'
    }else{
        result = 'Вы проиграли!'
    }

    alert(result);

};

reload.onclick = function (){
    rand = random(1,10);
    input.value = '';
};

function random(min, max) {
  return Math.random()*((max - min) + min).toFixed(2);
}*/

//подсчет вводимых символов

/*let countLetters = document.querySelector('.letters')
document.querySelector('textarea').oninput = function (e) {
  let value = e.target.value;
};*/

/*let input = document.querySelector('.add-item__input');
let addButton = document.querySelector('.add-item__button');
let toDo = document.querySelector('to-do');

let items = [];

addButton.onclick = function () {
    let value = input.value;
    if(value){
        items.push(input.value);
        input.value = '';
        render()
    }else{
        alert('Error!');
    }
  input.push(input.value);
  input.value = '';
};

function render() {
    for( let x = 0; x < item.length; x++){
        toDo.innerHTML += `<li>${items[x]}`<button onclick="deleteItem(${x})"></button/></li>;
    }

}

function clearTodo() {
    toDo.innerHTML = '';
}*/

let expression = document.querySelector('expression');
let result = document.querySelector('result');

let expressionResult = 0;
let value = [];
let flag = false;
let operator =

document.querySelector('operators').onclick = function (e) {
 let target = e.target ;
 
 if(target.tagName != 'Button'){
     return 
 }

    expressionNumber(target.innerText)
 
 
};

document.querySelector('numbers').onclick = function (e) {
    let target = e.target ;

    if(target.tagName != 'Button'){
        return
    }

    let number = target.innerText;

    if(number == '=')expressionNumber(){

    }

    if(flag){
        numbers[0] += target.innerText
    }else{
        numbers[1] += target.innerText
    }


};

function expressionNumber(operator) {
   let result;
   let oneNumber = +number[0];
   let twoNumber = +number[1];

   if(operator == '+')result = numbers[0] + numbers [1];
    (operator == '-')result = numbers[0] + numbers [1];
    (operator == '*')result = numbers[0] + numbers [1];
    (operator == '/')result = numbers[0] + numbers [1];


    render();
}

function  render(){
    expression.innerHTML = `${numbers[0]} ${operators} ${numbers[1]} ${result ? ' =' + result }`
}

