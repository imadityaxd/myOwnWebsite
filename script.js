const quotes = ["I am the chosen one.","Peaceful life is a myth." ,"Keep playing.", "Learn the game.", "Know the game.", "Don't let your guard down.", "If nobody hates you, you're simply bad at what you do."];

function generateRandomQuotes() {

    const quote = Math.floor(Math.random() *quotes.length);
    return quotes[quote];
};

let menuList = document.getElementById('menuList')
    menuList.style.maxHeight="0px";
function toggleMenu(){
    if(menuList.style.maxHeight=="0px"){
        menuList.style.maxHeight="300px";
    }
    else{
        menuList.style.maxHeight="0px";
    }
}