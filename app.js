const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
    console.log('Game is starting...');
}

const person = {
    greet: function greet() {
        console.log('Hello there!')
    } // Storing a function inside of a object is called METHOD and in the end METHOD is nothing but a function attached to a object
};

person.greet();

startGameBtn.addEventListener('click', startGame);