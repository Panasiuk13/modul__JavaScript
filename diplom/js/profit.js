let newProfit = document.querySelector('.js-profit');
let btnNewProfit = document.querySelector('.js-add-profit');

let profitValue = document.querySelector('.js-profit input');
let profitCategories = document.querySelector('.js-profit categories-select');
let profitDate = document.querySelector('.js-profit date') ;

let deleteProfit = document.querySelector('.js-delete-category');

let listProfit = document.querySelector('.profits__list');

let statusEditProfit = false;

btnNewProfit.addEventListener('click', addProfit);
deleteProfit.addEventListener('click', delProfit);
listProfit.addEventListener('click', funcProfit);

function addProfit (e) {
    e.preventDefault();

    let value =  newProfit.value;

    // Валидация новой категирии
    if(validateProfit(value)) {
        return
    }

    // Добавление категории в глобальную переменную
       profitData.push({
        value : profitValue.value,
        category: profitCategories.value,
        date: profitDate.value
    });

    // Перерендер всех дохода
    renderProfit();

    // Очистка поля ввода
    newProfit.value = '';
    profitValue.value = '';
    profitCategories = '';
    profitDate = '';
}
function validateProfit (number) {
    let hasErrors = false;

    if(profit === "number") {
        hasErrors = true;
    } else if(profit.includes(number)) {
        hasErrors = true;
    }

    return hasErrors;
}

// Рендер листа дохода
function renderProfit () {
    listProfit.innerHTML = '';

    profit.forEach(function(record) {
        //listProfit.appendChild(templateItemProfit(category))
    })
}


// Создание элемаента дохода
function templateItemCategory(name){
    let wrapperItem = document.createElement('div');
    wrapperItem.className = 'profit__item';

    let textItem = document.createElement('p');
    textItem.className = 'profit__name';
    textItem.textContent = name;

    wrapperItem.appendChild(textItem);

    let renameItem = document.createElement('button');
    renameItem.className = 'profit__rename button';
    renameItem.textContent = 'Rename';

    wrapperItem.appendChild(renameItem);

    return wrapperItem;
}

function funcProfit(e){
    let target = e.target;

    if(target.classList.contains('profit__rename') && !statusEditProfit){
        editProfit(target.parentElement);
        statusEditProfit = true;
    }
}

function editProfit(parentElement){
    let pProfit = parentElement.querySelector('.profit__name');
    let oldProfit = pProfit.textContent;

    let wrapperItem = document.createElement('div');
    wrapperItem.className = 'profit__item';

    let inputItem = document.createElement('input');
    inputItem.className = 'profit__name';
    inputItem.value = oldProfit;

    wrapperItem.appendChild(inputItem);

    let editItem = document.createElement('button');
    editItem.className = 'profit__edit button';
    editItem.textContent = 'Edit';

    let deleteItem = document.createElement('button');
    deleteItem.className = 'profit__delete button';
    deleteItem.textContent = 'Delete';

    wrapperItem.appendChild(editItem);

    listCategory.replaceChild(wrapperItem, parentElement);

    editItem.addEventListener('click', function(){
        profit.forEach(function(profit, index){

            if(profit === oldProfit){
                profit[index] = inputItem.value;

                renderProfit();
            }
        });

        statusEditProfit = false;
    })
}