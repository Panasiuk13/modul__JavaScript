//1///

const ageList = document.getElementById('age-list');
const labelNodes = ageList.children;
console.log(labelNodes);
//2//

const ageTable = document.getElementById('age-table');
const firstChildageTable = ageTable.getElementsByTagName('td')[0];
console.log(firstChildageTable);

//3//

let searchPersonForm = document.getElementsByTagName('form')[1];
console.log(searchPersonForm);

//4//
let searchForm =document.querySelectorAll('form[name="search"]')[0];
console.log(searchForm);

//5//
let form = document.querySelectorAll('form[name="search"]')[0];
let inputInForm = form.getElementsByTagName('input')[0];
console.log(inputInForm);

//6//
let info = document.querySelectorAll('[name="info[0]"]')[0];
console.log(info);

//7//
let infoInForm = document.querySelectorAll('form[name="search-person"]')[0];
let inputInInfo = infoInForm.querySelectorAll('[name="info[0]"]')[0];
console.log(inputInInfo);

//8//

let addSelect = document.createElement('select');

addSelect.id = 'select';


let optionOne = document.createElement('option');
optionOne.value = 'months';
optionOne.innerHTML = 'Months';
addSelect.appendChild(optionOne);


let optionTwo = document.createElement('option');
optionTwo.value = 'days';
optionTwo.innerHTML = 'Days';
addSelect.appendChild(optionTwo);

let addLabel = document.createElement('label');
addLabel.for = 'select';
addLabel.innerHTML = 'Please select';

let formSearch = document.querySelectorAll('form[name="search"]')[0];
let submitButton = formSearch.querySelectorAll('[type="submit"]')[0];
console.log(submitButton);


submitButton.before(addLabel);
submitButton.before(addSelect);