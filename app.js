// const h1 = document.querySelector('h1');
// const ul = document.querySelector('ul');
// const li = document.querySelector('.list-item');

// h1.textContent;
// h1.className;
// h1.textContent = 'Some new text for a header';
// h1.className = 'title';
// h1.style.color = 'red';
// h1.style.backgroundColor = 'green';

// ul.style.backgroundColor = 'blue';

// li.style.color = 'red';

// const input = document.querySelector('input');
// const h1 = document.getElementById('main-title');

// h1.id = 'new-id';

// input.setAttribute('value', 'Some new text!');

// const listItemElements = document.querySelectorAll('li');
const listItemElements = document.getElementsByTagName('li');

for (const listItemEl of listItemElements) {
    console.dir(listItemEl);
}