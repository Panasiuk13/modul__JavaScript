let el = document.querySelector('.eventListener');
let eventButton = document.querySelector('.eventButton');

window.addEventListener('DOMContentLoaded', function(){
    console.log('I am start!');
});

function eventAttribute(){
    alert('Hello');
}

document.querySelector('.eventDOM').onclick = function () {
    alert('Hello, I am event DOM');
};

el.addEventListener('click', function () {
    alert('Hello, I am addEventListener')
});

eventButton.addEventListener('click', function (e) {
    console.log(e);
});


//
// События мыши
//
let red = document.querySelector('.red');

red.addEventListener('mouseover', handleMouseover);
red.addEventListener('mouseout', handleMouseout);
red.addEventListener('mousemove', handleMousemove);

function handleMouseover () {
    red.classList.add('borderRadius');
    console.log('Mouse over');
}

function handleMouseout () {
    red.classList.remove('borderRadius');
    console.log('Mouse out');
}

function handleMousemove (event) {
    console.log(`X: ${event.clientX}, Y: ${event.clientY}`);
}

document.addEventListener('keydown', function (event) {
    let code = event.keyCode;

    if(code === 13){
        handleMouseover()
    }
});

document.addEventListener('keyup', function (event) {
    let code = event.keyCode;

    if(code === 13){
        handleMouseout()
    }
});

//
// Всплытие событий
//
let yellow = document.querySelector('.yellow');
let black = document.querySelector('.black');
let green = document.querySelector('.green');

yellow.addEventListener('click', function () {
    console.log('It is yellow');
});

black.addEventListener('click', function (e) {
    e.stopPropagation();
    console.log('It is black');
});

green.addEventListener('click', function () {
    console.log('It is green');
});

//
// event.target
//

let blue = document.querySelector('.blue');

blue.addEventListener('click', function(event){
    event.target.classList.add('borderRadius');
});

//
// Действие браузера по умолчанию
//

let link = document.getElementsByClassName('adukar')[0];
link.onclick = function(e) {
    e.preventDefault();
};


//
// Делегирование событий
//
let wrapper = document.getElementsByClassName('wrapper')[0];

for(let x = 0; x < 100; x++){
    let createElement = document.createElement('div');
    createElement.textContent = x;

    wrapper.appendChild(createElement);
}

wrapper.addEventListener('click', function (event) {
    let targer = event.target;

    if(targer.className === 'wrapper'){
        return
    }

    targer.classList.add('borderRadius');
});