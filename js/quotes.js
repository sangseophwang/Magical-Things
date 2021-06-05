const quotes = [
  {
    quote: "I never dreamed about success, I worked for it.",
    author: "Estee Lauder",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote: "The way get started is to quit talking and begin doing",
    author: "Walt Disney",
  },
  {
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
  },
  {
    quote: "The starting point of all achievement is desire.",
    author: "Napoleon Bonaparte",
  },
  {
    quote:
      "The winds and waves are always on the side of the ablest navigators.",
    author: "Edward Gibbon",
  },
  {
    quote: "Whatever you are, be a good one.",
    author: "Abraham Lincoln",
  },
  {
    quote: "Where there is no desire, there will be no industry.",
    author: "John Locke",
  },
  {
    quote: "It is better to fail in originality than to succeed in imitation.",
    author: "Herman Melville",
  },
  {
    quote: "In order to succeed, we must first believe that we can.",
    author: "Nikos Kazantzakis",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
