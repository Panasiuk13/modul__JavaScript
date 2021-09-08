let newExpenses = document.querySelector('.js-expenses');
let btnNewExpenses = document.querySelector('.js-add-expenses');

let expensesValue = document.querySelector('.js-expenses input');
let expensesCategories = document.querySelector('.js-expenses categories-select');
let expensesDate = document.querySelector('.js-expenses date') ;

let deleteExpenses = document.querySelector('.js-delete-category');

let listExpenses = document.querySelector('.expenseses__list');

let statusEditExpenses = false;

btnNewExpenses.addEventListener('click', addExpenses);
deleteExpenses.addEventListener('click', delExpenses);
listExpenses.addEventListener('click', funcExpenses);

function addExpenses (e) {
    e.preventDefault();

    let value =  newExpenses.value;

    // Валидация новой категирии
    if(validateExpenses(value)) {
        return
    }

    // Добавление категории в глобальную переменную
    expensesData.push({
        value : expensesValue.value,
        category: expensesCategories.value,
        date: expensesDate.value
    });

    // Перерендер всех категорий
    renderExpenses();

    // Очистка поля ввода
    newExpenses.value = '';
    expensesValue.value = '';
    expensesCategories = '';
    expensesDate = '';
    }

function validateExpenses (number) {
    let hasErrors = false;

    if(expenses === "number") {
        hasErrors = true;
    } else if(expenses.includes(number)) {
        hasErrors = true;
    }

    return hasErrors;
}

// Рендер листа категорий
function renderExpense () {
    listExpenses.innerHTML = '';

    expenses.forEach(function() {
        listExpenses.appendChild(templateItemCategory())
    })
}
// Создание элемаента категории
function templateItemExpenses(name){
    let wrapperItem = document.createElement('div');
    wrapperItem.className = 'expenses__item';

    let textItem = document.createElement('p');
    textItem.className = 'expenses__name';
    textItem.textContent = name;

    wrapperItem.appendChild(textItem);

    let renameItem = document.createElement('button');
    renameItem.className = 'expenses__rename button';
    renameItem.textContent = 'Rename';

    wrapperItem.appendChild(renameItem);

    return wrapperItem;
}

function funcCategory(e){
    let target = e.target;

    if(target.classList.contains('expenses__rename') && !statusEditExpenses){
        editExpenses(target.parentElement);
        statusEditExpenses = true;
    }
}

function editExpenses(parentElement){
    let pExpenses = parentElement.querySelector('.expenses__name');
    let oldExpenses = pExpenses.textContent;

    let wrapperItem = document.createElement('div');
    wrapperItem.className = 'expenses__item';

    let inputItem = document.createElement('input');
    inputItem.className = 'expenses__name';
    inputItem.value = oldExpenses;

    wrapperItem.appendChild(inputItem);

    let editItem = document.createElement('button');
    editItem.className = 'expenses__edit button';
    editItem.textContent = 'Edit';

    let deleteItem = document.createElement('button');
    deleteItem.className = 'expenses__delete button';
    deleteItem.textContent = 'Delete';

    wrapperItem.appendChild(editItem);

    listExpenses.replaceChild(wrapperItem, parentElement);

    editItem.addEventListener('click', function(){
        expenses.forEach(function(expenses, index){

            if(expenses === oldExpenses){
                expenses[index] = inputItem.value;

                renderExpenses();
            }
        });

        statusEditExpenses = false;
    })
}