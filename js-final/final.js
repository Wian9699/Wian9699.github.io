//Array for saved numbers.
let savedNumbers = Array(10).fill(null);

//Will randomize the numbers of slots when slots-button is pressed.
function randomizeNumbers() {
    for (let i = 1; i <= 10; i++) {
        let randomNumber = Math.floor(Math.random() * 10);
        document.getElementById(`slot${i}`).innerText = randomNumber;
    }
}


//When save button is pressed this function will save that slot number in the savedNumbers array
function saveNumber(slotNumber) {
    const currentNumber = document.getElementById(`slot${slotNumber}`).innerHTML;

    if (savedNumbers[slotNumber - 1] === null) {
        savedNumbers[slotNumber - 1] = currentNumber;
    }
    else {
        savedNumbers[slotNumber - 1] = null;
    }
}

//This function adds an event listener to the slot button which when clicked will go through the array and check each index 
//to see if it is null, if it isn't null it will take that number and append it the that respective slot.
document.querySelector('.slots-button button').addEventListener('click', function() {
    savedNumbers.forEach((storedNumber, index) => {
        if (storedNumber != null) {
            document.getElementById(`slot${index + 1}`).innerHTML = storedNumber;
        } 
    });
});