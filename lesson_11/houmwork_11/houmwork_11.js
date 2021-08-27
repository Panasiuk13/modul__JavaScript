//1 Создайте селект с несколькими опциями. Добавьте одну опцию, используя Javascript.
// Сделайте так,
// чтобы по выбору опции выводилось сообщение с данными этой опции (текст + значение).
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
}


//3
let str = 'Be or not to be...';
console.log(str.match(/\.../));
//4Создайте regexp, который ищет все положительные числа,
// в том числе десятичные.
let number = '1, 9, 15, -30, 100';
let regexp = new RegExp(/number/, 'd');
console.log(number.match(/\d{2}/));

//5/ Создайте регулярку, которая ищет цвета в формате #eee, #eeeddd



//6 Предложите строку, которая подойдет под выражение ^$



//7Создайте HTML-форму регистрации с полем пароля.
// // По клику на кнопку проведите валидацию пароля:
// // он должен содержать хотя бы одну цифру,
// // один спецсимвол и одну букву, а так же быть длиннее 6 знаков.
// // При прохождении валидации выводить приветственное сообщение,
// // в противном случае - ошибку