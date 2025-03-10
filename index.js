const quoteArray = [
  {
    quote:
      "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Life is never fair, and perhaps it is a good thing for most of us that  it is not",
    author: "Oscar Wilde",
  },
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    quote: "That it will never come again is what makes life so sweet.",
    author: "Emily Dickinson",
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
];

function randomQuote() {
  const quote = document.getElementById("quote");
  const quoteAuthor = document.getElementById("quote-author");
  const randomInt = Math.floor(Math.random() * quoteArray.length);
  quoteAuthor.textContent = `Author: ${quoteArray[randomInt].author}`;
  quote.textContent = quoteArray[randomInt].quote;
}

const quotesList = document.getElementById("quotes-list");

quoteArray.map((quote) => {
  const listCreate = document.createElement("li");
  listCreate.innerHTML = `<p style="color: yellow;margin-bottom:10px;">> ${quote.author}</p> ${quote.quote}`;
  quotesList.appendChild(listCreate);
});
