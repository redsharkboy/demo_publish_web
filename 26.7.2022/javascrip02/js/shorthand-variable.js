// // method 1
var price = 5;
var quantity = 14;
var total = price * quantity;

// method2
// var price, quantity, total;
// price = 5;
// quantity = 14;
// total = price * quantity;

// method3
// var price = 5, quantity = 14;
// var total = price * quantity;

var el = document.getElementById('cost');
el.textContent = '$' + total;