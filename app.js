// const ul = document.body.firstElementChild.nextElementSibling;
// const firstLi = ul.firstElementChild;

// console.log(firstLi);

// const section = document.querySelector('section');
// const button = document.querySelector('button');

// // section.style.backgroundColor = 'green';
// // section.className = '';
// section.className = 'red-bg';

// button.addEventListener('click', () => {
//     // if (section.className === 'red-bg visible') {
//     //     section.className = 'red-bg invisible';
//     // } else {
//     //     section.className = 'red-bg visible';
//     // }

//     section.classList.toggle('visible');
//     section.classList.toggle('invisible');
// })

const list = document.querySelector('ul');
const newLi = document.createElement('li')

list.appendChild(newLi);
newLi.textContent = 'Item 4';