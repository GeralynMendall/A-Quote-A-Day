var quotes = [
    "If you can't iterate, then you can't jiterate.",
    "Necessity is the mother of the impossible.",
    "You better console.log sooner rather than later or you're gonna get got.",
    "You're either Team Camel case or Team Underscore, you can't be both."
];

function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
