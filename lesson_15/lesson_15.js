/*console.log('a');
setTimeout(function(){
    console.log('setTimeout');
},1000);

console.log('b');


let timeId = setInterval(() => {
    let index = 0;
    index++;

    console.log(timeId);

    if(index >= 10){
      clearInterval(timeId)
    }
}, 500);*/


//xmlHttpRequest


/*let xhr = new XMLHttpRequest();

let url = 'https://rickandmortyapi.com/api/character';

xhr.open('GET', url, true);

xhr.send();

xhr.addEventListener('readystatechange', function () {
    if(xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            render(xhr.response);
        }
    }
});

function render(results){
let parse = JSON.parse(results);
let info = parse.info;
let persons = parse.results;



persons.forEach(elements => {

    });

let person = document.createElement('div');
let img = document.createElement('img');
img.src = element.image;

person.className = 'person';
person.textContent = 'person';

document.body.appendChild(person);
}*/

fetch('https://rickandmortyapi.com/api/character').then((data) => {
    let response = JSON.parse(data);
    return response;
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err.massage);
});


