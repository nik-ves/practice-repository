const h1 = document.getElementById('main-title');

document.getElementsByClassName('list-item'); // Old aproach
document.querySelector('.list-item'); // Returns first matching item
document.querySelectorAll('.list-item'); // Returns all 

document.querySelector('ul li:first-of-type'); // First item in the list
document.querySelector('ul li:last-of-type'); // Last item in the list