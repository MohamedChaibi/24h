document.addEventListener('DOMContentLoaded', function () {
var inputFrom = document.querySelectorAll('.input')[0];
var inputTo = document.querySelectorAll('.input')[1];
var from = document.getElementById('money');
var to = document.getElementById('money_2');

var jaryaaa = {
    Millimeter: { Millimeter: 1, Centimeter: 0.1, Kilometer: 0.000001, Mile: 0.0000006214 },
    Centimeter: { Millimeter: 10, Centimeter: 1, Kilometer: 0.00001, Mile: 0.000006214 },
    Kilometer: { Millimeter: 1000000, Centimeter: 100000, Kilometer: 1, Mile: 0.6214 },
    Mile: { Millimeter: 1609344, Centimeter: 160934.4, Kilometer: 1.609, Mile: 1 },
};

document.querySelector('.btn').onclick = function () {
    var amount = parseFloat(inputFrom.value);
    inputTo.value = (amount * jaryaaa[from.value][to.value]).toFixed(5);
};
});