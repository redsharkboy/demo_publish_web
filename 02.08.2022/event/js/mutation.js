var elList, addLink, newEL, newText, counter, listItem;

elList = document.getElementById('list');
addLink = document.querySelector('a');
counter = document.getElementById('counter');

function addItem(e) {
    e.preventDefault();
    newEL = document.createElement('li');
    newText = document.createTextNode('New list item');
    newEL.appendChild(newText);
    elList.appendChild(newEL);
}

function updateCount(){
    listItem = elList.getElementsByTagName('li').length;
    counter.innerHTML = listItem;
}

addLink.addEventListener('click',addItem, false);
elList.addEventListener('DOMNodeInserted', updateCount, false);