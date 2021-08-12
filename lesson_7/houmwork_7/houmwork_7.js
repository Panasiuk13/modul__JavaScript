function creatRandomNumberArr() {

    let result = [];
    for (let i = 0; i < 20; i++) {
        let rand = 1 + Math.floor(Math.random() * (50 - 1 + 1));
        result.push((rand));
    }
    return result;
}

console.log(creatRandomNumberArr());

//-----2----/


function creatRandomNumberArrSecond( length, min, max) {

    let result = [];
    for (let i = 0; i < length; i++) {
        let rand = min + Math.floor(Math.random() * (max - min + 1));
        result.push((rand));
    }
    return result;
}

console.log(creatRandomNumberArrSecond( 20, 1, 50));


//------3-----//
let str = 'https:// houmwork .html';

function includesStr(str) {
    if(str.startsWith('https://')){
        if(str.endsWith('.html')){
            return true;
        }
    }return false;

}
includesStr(str);
console.log(includesStr(str));

//------4----//
let text = 'I learn JavaScript!';

function numSymbol(str){
    let num = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'a'){
            num += 1;
        }
    }
    return num;
}
numSymbol(text);
console.log(numSymbol(text));

//-----5----//

let text1 = 'I learn JAvAScript!';

function numLetter(str){
    let num = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === "A" || str[i] === "a"){
            num += 1;
        }
    }
    return num;
}
numLetter(text1);
console.log(numLetter(text1));
//-----6----//
let date = new Date;
date.getDate();
date.getMonth();
date.getFullYear();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

`${day} ${month} ${year}` ;
let obj = {0: 'января',1: 'февраля',2: 'марта',3: 'апреля',4: 'мая',5: 'июня',6: 'июля',
    7: 'августа',8: 'сентября',9: 'октября',10: 'ноября',11: 'декабря'};
console.log(`${day} ${obj[month]} ${year}`);

//----7-----//
let dates = new Date();

let hours = dates.getHours();
let minutes = dates.getMinutes();
let seconds = dates.getSeconds();

let daysSeconds = hours * 3600 + minutes * 60 + seconds;
console.log(daysSeconds);