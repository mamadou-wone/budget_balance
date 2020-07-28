let formBudget = document.querySelector('#formBudget');
let inputBudget = document.getElementById('inputBudget');

formBudget.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(inputBudget.value);
})