// const list = document.querySelector('ul');
// const newLi = document.createElement('li');

// newLi.textContent = 'Item 4';

// list.prepend(newLi); // Puts the item at first place in list

// list.lastElementChild.before(newLi); // Selects the last element in the list and adds the newLi item in front of it

// list.lastElementChild.after(newLi); // After the last element

// list.firstElementChild.replaceWith(newLi); // Replaces it with first element in the list

//=======================================================================

// const list = document.querySelector('ul');
// const secondLi = list.children[1];

// const newLi = document.createElement('li');
// newLi.textContent = 'Item 4';

// secondLi.insertAdjacentElement('afterend', newLi);

// //=======================================================================

// const newLi2 = newLi.cloneNode(true);
// list.append(newli, newLi2);v

//=======================================================================

const list = document.querySelector('ul');

// list.remove();

list.parentElement.removeChild(list);
