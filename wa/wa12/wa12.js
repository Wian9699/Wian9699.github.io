document.addEventListener('DOMContentLoaded', function() {
  var newQuoteButton = document.querySelector('#js-new-quote');
  newQuoteButton.addEventListener('click', getQuoteAndImage);

  getQuoteAndImage();
});

function getQuoteAndImage() {
  getQuote().then(quote => getImage(quote));
}

function getQuote() {
  var apiUrl = 'https://type.fit/api/quotes';

  return fetch(apiUrl)
      .then(function(response) {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(function(data) {
          var randomIndex = Math.floor(Math.random() * data.length);
          var quote = data[randomIndex].text; 
          displayQuote(quote);
          return quote; 
      })
      .catch(function(error) {
          console.error('Fetch error:', error);
          alert('An error occurred while fetching the quote');
      });
}


function getImage(quote) {
  var unsplashApiKey = '53kmVezUHb0fOFMhPMB4kogJG2AJUYmCBfRUETio_B4';
  var unsplashUrl = `https://api.unsplash.com/photos/random?client_id=${unsplashApiKey}&query=${quote}`;

  fetch(unsplashUrl)
      .then(function(response) {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(function(data) {
          displayImage(data.urls.regular); 
      })
      .catch(function(error) {
          console.error('Fetch error:', error);
          alert('An error occurred while fetching the image');
      });
}

function displayQuote(quote) {
  var quoteTextElement = document.getElementById('js-quote-text');
  quoteTextElement.textContent = quote;
}

function displayImage(imageUrl) {
  var imageElement = document.getElementById('js-quote-image'); 
  imageElement.src = imageUrl;
}

/*The extension that I have added to this project is first I changed the api to an api that can generate random quotes. From there I took whatever the quote may be and I used the Unsplash API to generate a photo using the quote as a query. Once the unsplash api
got the query it would find a photo in that query and then display the photo onto my webpage. In this I was able to create a system that generated a random quote and a picture that matches the quote generated. */