const quotes = ["I am the chosen one.", "Keep playing.", "Learn the game.", "Know the game.", "Don't let your guard down.", "If nobody hates you, you're simply bad at what you do."];

function generateRandomQuotes() {

    const quote = Math.floor(Math.random() *quotes.length);
    return quotes[quote];
};

function displayQuote(){
let text = document.getElementById('quote');
text.innerHTML= generateRandomQuotes();
};

console.log(generateRandomQuotes());
console.log(quotes[2]);