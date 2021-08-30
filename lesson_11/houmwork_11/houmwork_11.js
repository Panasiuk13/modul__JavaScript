//1
const selectElement = document.getElementsByClassName('fruits')[0];
let option = document.createElement('option');
option.value = 'other';
option.innerHTML = 'Other';
selectElement.appendChild(option);

selectElement.addEventListener('change', (event) => {
    const optionValueSelected = event.target.value;
    const optionElementSelected = selectElement.querySelector(`option[value=${optionValueSelected}]`);
    const optionText = optionElementSelected.innerHTML;
    alert(`${optionValueSelected}: ${optionText}`);
});


//2
function t2_calculate() {
    const form = document.getElementById('t2_form');
    const depositInitial = Number(form.querySelector('input[name=text]').value);
    const depositTime = Number(form.querySelector('select[name=select]').value);
    const depositFinal = Math.floor(depositInitial * (1 + 0.12 * (depositTime / 12)));

    console.log(`${depositInitial} - ${depositTime} - ${depositFinal}`);

    const spanInitial = document.getElementById('t2_valueInitial');
    const spanFinal = document.getElementById('t2_valueFinal');
    spanInitial.innerHTML = depositInitial;
    spanFinal.innerHTML = depositFinal;

    const heightInitial = Math.floor((depositInitial / depositFinal * 200) / 1.7);
    const heightFinal = 200;

    const columnInitial = document.getElementById('t2_columnInitial');
    columnInitial.style.height = heightInitial + 'px';
    const columnFinal = document.getElementById('t2_columnFinal');
    columnFinal.style.height = heightFinal + 'px';
}
//3
let str = 'Be or not to be...';
console.log(str.match(/\.../));

//4
let rgexp = new RegExp(/[+]?\d+(\.\d+)?/);
let strValue = '10000, 57458, -811175, 0.247885, 1587, 25.3, -454887, 612365, 0';
console.log(strValue.match(rgexp));

//5/
let regexp = new RegExp(/#([a-f0-9]{6}){1,2}/gi);
let strC = "color: #3f3; background-color: #AA00ef;color: #fffff; background-color: #808080;color: #B22222; background-color: #90EE90;color: #FF4500; background-color: #FFFFE0;color: #7FFFD4; background-color: #20B2AA;color: #FF00FF; background-color: #0000CD;";
console.log( strC.match(regexp) );

//6
const inputValue = '';
const regex = new RegExp(/^$/);
const isValid = regex.test(inputValue);
console.log(isValid);

//7
function t7_button() {
    const input = document.getElementById('t7_password');
    const inputValue = input.value;
    const regex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/);
    const isValid = regex.test(inputValue);
    console.log(isValid);

    const spanError = document.getElementById('t7_error');
    if(isValid === false){
        spanError.innerHTML = 'Ваш пароль должен содержать хотя бы одну цифру, спецсимвол, а так же быть длиннее 6 знаков!';
    } else {
        alert('Success!');
    }
}

function t7_oninput() {
    const spanError = document.getElementById('t7_error');
    spanError.innerHTML = '';
}


