let quoteText = document.querySelector(".quote"),
    btn = document.querySelector("button"),
    author = document.querySelector(".author");


btn.addEventListener("click", randomQuote)


function randomQuote(){
    btn.innerText = "Loading Quote...";
    fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
        quoteText.innerText = result.content;
        author.innerText = "- " + result.author;
        btn.innerText = "New Quote";
    });
}
