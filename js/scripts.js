const quoteText = document.getElementById("content");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("newquote");

function newQuote() {
    let url;
    const tag = document.getElementById("tag").value;

    if (tag !== "all") {
        url = "http://api.quotable.io/random?tags=" + tag;
    } else {
        url = "http://api.quotable.io/random";
    }

    fetch(url)
        .then(response => response.json())
        .then(result => {
            quoteText.innerText = result.content;
            authorText.innerText = result.author;
        })
        .catch(function() {
            console.log("error");
        });
}

function copyQuote() {
    navigator.clipboard.writeText('"' + quoteText.innerText + '"' + ' - ' + authorText.innerText);
}

window.addEventListener("load", (event) => {
    newQuote();
    newQuoteBtn.addEventListener("click", newQuote);
    quoteText.addEventListener("mouseover", copyQuote);
});