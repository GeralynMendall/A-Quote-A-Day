var quotes = [
    'If you cant iterate, then you cant jiterate.',
    'Necessity is the mother of the impossible.',
    'You better console.log sooner rather than later or youre gonna get got.',
    'Youre either Team Camel case or Team Underscore, you cant be both.'
];

function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
}
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];