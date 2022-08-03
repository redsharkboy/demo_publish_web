var list = document.getElementsByTagName('ul')[0];

var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('cream');
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

var newItemFirst = document.createElement('li');
var newItemFirst = document.createTextNode('kale');
newItemFirst.appendChild(newTexFirst);
list.insertBefore(newTexFirst, list.firstChild);

var listItems = document.querySelectorAll('li');

var i;
for (i = 0; i < listItems.length; i++){
    listItems[i].className = 'cool';
}

var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItem = listItems.length;
var newHeading = headingText + '<span>' + totalItem + '</span>';
heading.innerHTML = newHeading;