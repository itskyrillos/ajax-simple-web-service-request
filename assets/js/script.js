async function showQuote() {
    try {
        const response = await fetch("https://thatsthespir.it/api");

        const quotes = await response.json();
        console.log(quotes.quote);

        document.getElementById("quote").innerHTML = '"' + quotes.quote + '"';
    } catch (error) {
        console.error(error);
    }
}

showQuote();
