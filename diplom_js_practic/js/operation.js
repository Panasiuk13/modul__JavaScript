let newButtonExpenses = document.querySelector('.expenses');
let newButtonProfit = document.querySelector('.profit');

let btnNewOperation = document.querySelector('js-add-operation');
let newOperationSum = document.querySelector('.operation_sum');
let newOperationCategory = document.querySelector('.operation_category');
let newOperationDate = document.querySelector('.operation_date');

let flagOperation = null;

newButtonExpenses.addEventListener('click', function(){ renderFormOperation('expenses') });
newButtonProfit.addEventListener('click', function(){ renderFormOperation('profit') });
btnNewOperation.addEventListener('click', addOperation());

function renderFormOperation(operation){
    flagOperation = operation;

    newOperationSum.placeholder = `Sum ${operation}`;
    btnNewOperation.value = `Add ${operation}`;

    toggleFormOperation();
}


function toggleFormOperation() {
   formOperation.classList.toggle('operation-form--hidden');
}

function addOperation(e){
    e.preventDefault();

    let valueSum = newOperationSum.value;
    let valueCategory = newOperationCategory.value;
    let valueDate = newOperationDate.value;

    let newOperation = {
        sum: valueSum,
        category: valueCategory,
        date: valueDate,
        status: flagOperation
    };

    total.push(newOperation);

    clearForm();
    filterTotal();
}

function renderExpensesCategories() {
   let selectCategories = document.querySelector('.operation_category') ;

    selectCategories.innerHTML = '<option value="">Select category</option>';

    categories.forEach(function(category) {
        let option = document.createElement('option');

        option.value = category;
        option.textContent = category;

        selectCategories.appendChild(option);
    })
}

function  renderExpensesDate() {
   let dateExpenses = document.querySelector('.expenses_date');

   dateExpenses.value = new Date().toISOString().slice(0, 10);
}

function clearForm() {
  newOperationSum.value = '';

  renderExpensesCategories();
  renderCategory();
}