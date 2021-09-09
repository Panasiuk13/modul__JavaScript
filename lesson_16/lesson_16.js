/*console.log(navigator);
//console.log(navigator.geolocation);
//tekuchshaya location
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
    })
}else{
    console.log('navigation is not defender!');
}

///работа с хранилщем


/// Работа с хранилищем
let userWrapper = document.querySelector('.user');
let form = document.querySelector('.form');

document.querySelector('.auth').onclick = function(e){
    e.preventDefault();

    let username = form.elements.login.value;
    let password = form.elements.pass.value;

    if(username === ''){
        return alert('Error login!');
    }

    if(password === ''){
        return alert('Error pass!');
    }

    if(username !== 'Alex' && password !== '1234'){
        return alert('Error Log in!');
    }

    localStorage.setItem('username', username)
    localStorage.setItem('password', password)

    isLogin();
};

function isLogin(){
    let user = localStorage.getItem('username');
    let pass = localStorage.getItem('password');

    if(user && pass){
        userWrapper.textContent = user;
        form.style.display = 'none';
    }
}

isLogin();

document.querySelector('.back').onclick = function(){
    history.back();
}

document.querySelector('.go').onclick = function(){
    history.go(1);
}*/

//замыкание+рекурсия собеседование
console.log(summa(1)(2)(3)());

function summa(x) {
    return function(y) {
     if(y){
         return summa(x + y)
     }
     return x;
    }
}
let str = 'JavaScript';
console.log(str[str.length - 1]);


// Вывести в консоль только чётные числа
let arr = [2, 54, 564, 23, 123, 764];
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        console.log(arr[i]);
    }

}

// Вывыести сумму чисел
console.log(sum(1)(2));

function sum(number){

    function sumTwo(x){
        return number + x;
    }
    return sumTwo;
}
