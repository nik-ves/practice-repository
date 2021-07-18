const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal'); Another way of selecting
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop');
// const backdrop = document.body.firstElementChild; Another way
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');

const toggleMovieModal = () => { // function() {}
    addMovieModal.classList.toggle('visible'); // toggle checks if there is visible class already in the div. If there isnt it will be added, and if there is it will be removed
    toggleBackdrop();
};

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const backdropClickHandler = () => {
    toggleMovieModal();
};

const cancelAddMovie = () => {
    toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', toggleMovieModal)