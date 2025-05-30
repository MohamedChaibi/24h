document.addEventListener('DOMContentLoaded', function () {
    var inputFrom = document.querySelectorAll('.input')[0];
    var inputTo = document.querySelectorAll('.input')[1];
    var from = document.getElementById('money');
    var to = document.getElementById('money_2');


    var flousi = {
    USD: { USD: 1, EUR: 0.92, TND: 3.1 },
    EUR: { USD: 1.09, EUR: 1, TND: 3.35 },
    TND: { USD: 0.32, EUR: 0.3, TND: 1 },
};


document.querySelector('.btn').onclick = function () {
    var amount = parseInt(inputFrom.value); 
    inputTo.value = (amount * flousi[from.value][to.value]).toFixed(2);
};
});