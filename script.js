const quote = document.getElementById("quote");
const author = document.getElementById("author");
const apiUrl = "http://api.quotable.io/random";
async function getQuote(url){
    const response = await fetch(url);
    let data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuote(apiUrl);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by " + author.innerHTML, "Tweet Window", "width=600, height=300");
}