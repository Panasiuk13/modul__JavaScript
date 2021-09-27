let newCategory = document.querySelector('.js-category');
let btnNewCategory = document.querySelector('.js-add-category');


let listCategory = document.querySelector('.categories__list');

let statusEditCategory = false;

btnNewCategory.addEventListener('click', addCategory);

listCategory.addEventListener('click', funcCategory);

function addCategory (e) {
    e.preventDefault();

    let value =  newCategory.value;

    // Валидация новой категирии
    if(validateCategory(value)) {
        return
    }

    // Добавление категории в глобальную переменную
    categories.push(newCategory.value);

    // Перерендер всех категорий
    renderCategory();

    // Очистка поля ввода
    newCategory.value = '';
}

function validateCategory (category) {
    let hasErrors = false;

    if(category === "") {
        hasErrors = true;
    } else if(categories.includes(category)) {
        hasErrors = true;
    }

    return hasErrors;
}

// Рендер листа категорий
function renderCategory () {
    listCategory.innerHTML = '';

    categories.forEach(function(category) {
        listCategory.appendChild(templateItemCategory(category))
    });
    renderExpensesCategories();
}

// Создание элемаента категории
function templateItemCategory(name){
    let wrapperItem = document.createElement('div');
    wrapperItem.className = 'categories__item';

    let textItem = document.createElement('p');
    textItem.className = 'categories__name';
    textItem.textContent = name;

    wrapperItem.appendChild(textItem);

    let controlItem = document.createElement('div');
    controlItem.className = 'categories_control';

    let renameItem = document.createElement('button');
    renameItem.className = 'categories__rename button';
    renameItem.textContent = 'Rename';

    let deleteItem = document.createElement('button');
    deleteItem.className = 'js-categories__delete button';
    deleteItem.textContent = 'Delete';

    wrapperItem.appendChild(renameItem);

    return wrapperItem;
}

function funcCategory(e){
    let target = e.target;

    if(target.classList.contains('categories__rename') && !statusEditCategory){
        editCategory(target.parentElement.parentElement);
        statusEditCategory = true;
    }
    if(target.classList.contains('categories__delete') ){
        deleteCategory(target.parentElement.parentElement);
        statusEditCategory = true;
    }
}

function editCategory(parentElement){
    let pCategory = parentElement.querySelector('.categories__name');
    let oldCategory = pCategory.textContent;

    let wrapperItem = document.createElement('div');
    wrapperItem.className = 'categories__item';

    let inputItem = document.createElement('input');
    inputItem.className = 'categories__name';
    inputItem.value = oldCategory;

    wrapperItem.appendChild(inputItem);

    let editItem = document.createElement('button');
    editItem.className = 'categories__edit button';
    editItem.textContent = 'Edit';

    wrapperItem.appendChild(editItem);

    listCategory.replaceChild(wrapperItem, parentElement);

    editItem.addEventListener('click', function(){
        categories.forEach(function(category, index){

            if(category === oldCategory){
                categories[index] = inputItem.value;

                renderCategory();
            }
        });

        statusEditCategory = false;
    })
}
    function  deleteCategory(parentElement) {
    let pCategory = parentElement.querySelector('.categories__name');
    let category = pCategory.textContent;

    const permission = confirm(`Удалить категорию ${category}?`);

    if(permission){
     categories.splice(categories.indexOf(category), 1);


     renderCategory();
    }
}


