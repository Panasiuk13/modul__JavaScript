//-----1----//
function tictoc(start, step) {
    return start + step;

}
function counterFactoryX(start, step) {
    return tictoc(start, step);
 }

console.log(counterFactoryX(5,5));


// //-----2----//
function take(tictoc, x) {
     let arrResult = [];
     let step = 10;
     for (let i = 2; i < x; i++ ){
         arrResult.push(tictoc(i, step));
     }
  return   arrResult;
 }

console.log(take(tictoc, 5));

//------3-----//
 let text ='Разбейте текст этой задачи на отдельные слова, ' +
     'удаляя по пути точки и запятые, ' +
     'а полученные слова сложите в массив. ' +
     'Напишите функцию, которая возвращает массив ' +
     'из тех же слов, но развёрнутых задом наперёд, ' +
     'причём массив должен быть отсортирован по ' +
    'количеству букв в слове. Напишите другую функцию, ' +
     'которая считает общее количество букв «с» ' +
     'во всех элементах массива.';

 function splitTextToWords(text) {
     let arr = [];
     for (let i = 0; i < text.length; i++) {
         if (text[i] !== ' ') {
             let word = '';
             while (text[i] !== ' ' && i < text.length) {
                 if (text[i] !== '.' && text[i] !== ',') {
                     word += text[i];
                 }
                 i++;
             }
             arr.push(word);
         }
     }
     return arr;
 }
console.log(splitTextToWords(text));



function reversStringArr  (arr){
     let result = [];
     for(let i = 0; i < arr.length; i++) {
         result.push(arr[i].split('').reverse().join(''));
     }
     return result;
 }
let x = splitTextToWords(text);
let result = reversStringArr (x);
console.log(result);

result.sort(function (a, b) {
    if(a.length > b.length){
        return -1;
    }
    if(a.length < b.length){
        return 1;
    }
    return 0;

});

console.log((result.sort(function (a, b) {return a - b})));

function numSymbol(arr){
     let num = 0;
     for(let i = 0; i < arr.length; i++){
         if(arr[i] === 'с'){
             num += 1;
         }
     }
     return num;
 }

 console.log(numSymbol(text));
