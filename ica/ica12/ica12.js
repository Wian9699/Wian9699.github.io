document.addEventListener('DOMContentLoaded', function() {
    var newQuoteButton = document.querySelector('#js-new-quote');
    newQuoteButton.addEventListener('click', getQuote);
  
    getQuote();
  });
  
  function getQuote() {
    var apiUrl = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';
  
    fetch(apiUrl)
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(function(data) {
        displayQuote(data.question);
      })
      .catch(function(error) {
        console.error('Fetch error:', error);
        alert('An error occurred while fetching the quote');
      });
  }
  
  function displayQuote(quote) {
    var quoteTextElement = document.getElementById('js-quote-text');
    quoteTextElement.textContent = quote;
  }
  