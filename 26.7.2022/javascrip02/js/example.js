var greeting = 'Howdy';
var name = 'Molly';
var message = 'please check your order:';

var welcome = greeting + name + message;

var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

var el = document.getElementById('greeting');
el.textContent = welcome;

var elSign = document.getElementById('userSign');
elSign.textContent = sign;

var elSign = document.getElementById('title');
elSign.textContent = title;

var elSubTotal = document.getElementById('subtotal');
elSubTotal.textContent = '$' + subTotal;

var elSubTotal = document.getElementById('shipping');
elSubTotal.textContent = '$' + shipping;

var elSubTotal = document.getElementById('grandTotal');
elSubTotal.textContent = '$' + grandTotal;