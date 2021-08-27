//global
console.log(window);
//---//
var a = 10;
let b = 10;
console.log(window.a);
console.log(window.b);

//---//

//DOM структура дерева


let html = document.documentElement;
console.log(html);

let head = document.head;
console.log(head);


let body = document.body;
console.log(body);


//----//
//navigation DOM

//получение дочерних элементов
let childNotes = document.body.childNotes;
console.log(childNotes);

/////////////
//получение первого дочернего элемента
let firstChild = document.body.firstChild;
console.log(firstChild);
//получение последнего дочернего элемента
let lasttChild = document.body.lasttChild;
console.log(lasttChild);

//первый дочерний эл-т без комм и текст узлов

let firstElementChild = document.body.firstElementChild;
console.log(firstElementChild);


// search id

let seargId = document.getElementById('idText');
console.log(seargId);

//search tag
let searchTag = document.getElementsByTagName('p');
console.log(searchTag);

//search classs

let searchClass = document.getElementsByClassName('child');
console.log(searchClass);

//поиск по селектору

let searchQueryAll =document.querySelectorAll('.child .text');
console.log(searchQueryAll);
let searchQueryOne =document.querySelectorAll('.child');
console.log(searchQueryOne);

//
let tagClass = document.getElementsByClassName('text');
console.log(tagClass[0].tagName);
console.log(tagClass);

//Изменить ли поучить содержимое

console.log(searchClass[0].innerHTML);
searchClass[0].innerHTML = '<p>Hello world</p>';
console.log(searchClass[0].textContent);


/*let input = document.getElementsByClassName('lastname');
console.log(input.hasAttribute('name'));
console.log(input.hasAttribute('class'));
//
console.log(input.getAttribute('name'));
//
console.log(input.setAttribute('name', 'email'));*/


//

let link = document.getElementsByClassName('link')[0];
console.log('До href: ' + link.href);

link.id = 'linkAdukar';
link.class = 'linkAdukar';
link.href = 'https://adukar.by';
console.log('После href: ' + link.href);

//изменение страницы

//let create = document.createElement('div');
//console.log(create);//создание нового элемента

//
let create = document.createElement('div');

create.id = 'car';
create.className = 'carName vvcvcvf';
create.textContent = 'autos';
document.body.appendChild(create);

link.before(create);
//

//работа с классами

let auto = document.getElementById('car');
auto.className = 'cars autos';

//проверка сущест-ия класса
console.log(auto.classList.contains('cars'));


//добавление нового класса

auto.classList.add('good');
//delete
auto.classList.remove('cars');
//
auto.classList.toggle('good');
//replace
auto.classList.replace('autos', 'automobile');


// styles

auto.style.color = 'red';
console.log(auto.style.color);
auto.style.textTransform = 'uppercase';
auto.style.background = '#444';


let radio = 50;

auto.style.borderRadius = radio + '%';
let div = {
    innerHTML: '<p>It is good!</p>',
    textContent: 'It is good!',
    id: '#text',
    className: 'textGood',
    classList: {
        add: function(newClass){
            console.log(newClass);
        },
        remove: function(deleteClass){

        }
    }
};

div.innerHTML = '<p>It is not good!</p>';
div.classList.add('qwe');

