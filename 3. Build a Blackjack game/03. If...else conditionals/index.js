let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard

// Woring of black jack
// sum = 21 (win), <21 (still fine), >21 (you are out of the game)
// Ace corresponds to 11, king corresponds to 10

if (sum < 21) {
    console.log("Do you want to draw a new card?")
} else if (sum === 21) {
    console.log("Wohoo! You've got blackjack")
} else {
    console.log("You are out of the game! ")
}