// let apiQuotes = [];

//Show the new quote
function newQuote() {
  // Pick a random quote from api quotes
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  console.log(quote);
}

// Get Quotes from API
/*
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    alert(error);
    // Catch Error Here
  }
}

// On Load
getQuotes();
*/

newQuote();
