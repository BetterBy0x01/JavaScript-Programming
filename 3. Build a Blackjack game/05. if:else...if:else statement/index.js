// Check if the person is elegible for a birthday card from the King! (100)

let age = 100

// if less than 100    -> "Not elegible"
if (age < 100) {
    console.log("Not Eligible")
}
// else if exactly 100 -> "Here is your birthday card from the King!"
// === is for strict check, like if 100 is a string in the below line it should still work.
else if (age === 100) {
    console.log("Here is your birthday card from the King!")
}
// else                -> "Not elegible, you have already gotten one"
else {
    console.log("Not Eligible, you have already gotten one")
}