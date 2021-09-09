// console.log('Log A');



// setTimeout(function(){
//     console.log('setTimeout');
// }, 1000);



// console.log('Log B');


// let index = 0;

// let timeId = setInterval(() => {
//     index++;

//     console.log(index);

//     if(index >= 10){
//         clearInterval(timeId);
//     }
// }, 500);



// let xhr = new XMLHttpRequest();

// let url = 'https://rickandmortyapi.com/api/character';

// xhr.open('GET', url, true);

// xhr.send();

// xhr.addEventListener('readystatechange', function(){
//     if(xhr.readyState == xhr.DONE){
//         if(xhr.status === 200){
//             render(xhr.response);
//         }
//     }
// })

fetch('https://rickandmortyapi.com/api/character')
    .then((data) => {
        let response = data.json();
        return response;
    }).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err.message);
});


function render(results){
    let parse = JSON.parse(results);
    let info = parse.info;
    let persons = parse.results;

    persons.forEach(element => {
        let person = document.createElement('div');
        let img = document.createElement('img');
        img.src = element.image;

        person.className = 'person';
        person.textContent = element.name;


        person.appendChild(img);
        document.body.appendChild(person);
    });

}

// setTimeout(()=>{
//     console.log('End Timeout');
// }, 1);

// for(let x = 0; x < 100; x++){
//     console.log(x);
// }

// (function(){
//     console.log('End');
// })();

