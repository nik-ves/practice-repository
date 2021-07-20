const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal'); Another way of selecting
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop');
// const backdrop = document.body.firstElementChild; Another way
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input'); // Selecting all inputs, in this case we have 3 input fields
const movies = [];

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

const cancelAddMovieHandler = () => {
    toggleMovieModal();
    clearMovieInputs();
};

const clearMovieInputs = () => {
    for (const usrInput of userInputs) {
        usrInput.value = '';
    }
}

const addMovieHandler = () => {
    const titleValue = userInputs[0].value; // First input at index 0 is title
    const imageUrlValue = userInputs[1].value; // Image url is index 1
    const ratingValue = userInputs[2].value; // Rating is index 2

    // trim() - Removes excess white space at the beggining and at the end of the input
    if (titleValue.trim() === '' || 
        imageUrlValue.trim() === '' || 
        ratingValue.trim() === '' || 
        ratingValue < 1 ||
        ratingValue > 5) {
            alert('Please enter valid values (rating between 1 and 5).');
            return;
    }

    const newMovie = {
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };

    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInputs();
}

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', toggleMovieModal);
confirmAddMovieButton.addEventListener('click', addMovieHandler);