
// Establish the winning total goal for the game
const winningTotal = 50;

// This function simulates the roll of a die
const getRandomNumber = max => {
    let rand = null;
    if (!isNaN(max)) {
        rand = Math.random();
        rand = Math.floor(rand * max);
        rand = rand + 1;
    }
    return rand;
}