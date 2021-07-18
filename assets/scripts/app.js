const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal'); Another way of selecting

const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;

const toggleMovieModal = () => { // function() {}
    addMovieModal.classList.toggle('visible'); // toggle checks if there is visible class already in the div. If there isnt it will be added, and if there is it will be removed
};

startAddMovieButton.addEventListener('click', toggleMovieModal);