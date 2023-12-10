//Set elements
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popup-message');
const submitButton = document.getElementById('submit-answer');

//Api key for movie database
const apiKey = '09fb3c819a8bc157e2e52fc44f0df372';

//This function will fetch a difficult question from the trivia api and then send the question
// and answers to the showPopup function. if it doesn't work it will call the function again.
function fetchTriviaQuestion() {
    fetch('https://opentdb.com/api.php?amount=1&difficulty=medium&category=9&type=multiple')
        .then(response => response.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
                const trivia = data.results[0];
                showPopup(trivia.question, trivia.correct_answer, trivia.incorrect_answers);
            } else {
                console.log(data.results[0]);
                console.error('No trivia results found, fetching again...');
                fetchTriviaQuestion(); // Call itself again
            }
        })
        .catch(error => {
            console.error('Error fetching trivia question, trying again:', error);
            setTimeout(fetchTriviaQuestion, 3000); // Retry after 3 seconds
        });
}


//This function will randomly sort the answers for the questions within the array, then will go
//through each answer and give it a button to be displayed in the popup. If a button is pressed
//it will send that answer and the correct answer to the chechk answer function.
function showPopup(question, correctAnswer, incorrectAnswers) {
    let answers = incorrectAnswers.concat(correctAnswer);
    answers = answers.sort(() => Math.random() - 0.5); // Shuffle the answers

    popupMessage.innerHTML = `<p>${question}</p>`;
    answers.forEach(answer => {
        const answerButton = document.createElement('button');
        answerButton.textContent = answer;
        answerButton.onclick = function() { 

            document.querySelectorAll('#popup-message button').forEach(button => {
                button.classList.remove('button-clicked');
            });


            this.classList.add('button-clicked');

            checkAnswer(answer, correctAnswer); 
        };
        popupMessage.appendChild(answerButton);
    });

    popup.style.display = 'block';
}

function checkAnswer(selectedAnswer, correctAnswer) {
    
    submitButton.onclick = function() {
        if (selectedAnswer === correctAnswer) {
            // Correct answer, continue as normal
            popup.style.display = 'none';
        } else {
            // Incorrect answer, reset the webpage
            location.reload();
        }
    };
}

function getRandomYear(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fetchRandomMovie() {
    const randomYear = getRandomYear(2001, 2023);

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=true&include_video=true&language=en-US&primary_release_date.gte=2001-01-01&sort_by=popularity.desc&vote_average.gte=8&vote_count.gte=5000&with_original_language=en&year=${randomYear}`)
        .then(response => response.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
                const randomIndex = Math.floor(Math.random() * data.results.length);
                const movie = data.results[randomIndex];
                showMoviePopup(movie.overview, movie.title);
                console.log(movie);
            }
        })
        .catch(error => console.error('Error fetching movie:', error));
}

function showMoviePopup(overview, movieTitle) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const submitButton = document.getElementById('submit-answer');

    // Display the movie overview
    popupMessage.innerHTML = `<p>${overview}</p>`;
    popupMessage.innerHTML += `<input type='text' id='user-input'/>`;

    // Show the popup
    popup.style.display = 'block';

    // Submit button event listener
    submitButton.onclick = function() {
        const userInput = document.getElementById('user-input').value;
        if (userInput.toLowerCase() === movieTitle.toLowerCase()) {
            // Correct title
            popup.style.display = 'none';
        } else {
            // Incorrect title, reset the webpage
            location.reload();
        }
    };
}

document.addEventListener('DOMContentLoaded', () => {

    let currentBoxIndex = 1;
    let currentBox = document.getElementById(`box${currentBoxIndex}`);
    
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    cursor.style.animation = 'blink 1s step-start infinite';
    currentBox.appendChild(cursor);

    function moveToNextBox() {
        currentBoxIndex++;
        updateCurrentBox();
    }

    function moveToPreviousBox() {
        currentBoxIndex = Math.max(currentBoxIndex - 1, 1);
        updateCurrentBox();
    }

    function updateCurrentBox() {
        const newBox = document.getElementById(`box${currentBoxIndex}`);
        if (newBox) {
            if (currentBox.contains(cursor)) {
                currentBox.removeChild(cursor);
            }
            currentBox = newBox;
            currentBox.appendChild(cursor);
        }
    }

    document.addEventListener('keydown', (event) => {
        if (popup.style.display === 'none' || popup.style.display === '') {
            if (event.key >= '0' && event.key <= '9') {
                event.preventDefault();
                currentBox.innerText = event.key;
                currentBox.appendChild(cursor); // Reattach the cursor
                moveToNextBox();
                
                
                if (Math.random() < 0.5) {
                    fetchRandomMovie(); // 50% chance to call this function
                } else {
                   fetchTriviaQuestion(); // 50% chance to call this function
                }
            } else if (event.key === 'Backspace') {
                event.preventDefault();
                if (currentBox.innerText !== '') {
                    currentBox.innerText = '';
                    currentBox.appendChild(cursor); // Reattach the cursor
                } else {
                    moveToPreviousBox();
                }
            }
        }
    });
});
