const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');

verseChoose.onchange = function () {
    let verse = verseChoose.value;
    updateDisplay(verse);
}

function updateDisplay(verse) {
    verse = verse.replace(" ", "").toLowerCase();
    let url = `${verse}.txt`;

    // fetch(url)
    //     .then(function(response) {
    //         response.text()
    //         .then(function(text) {
    //             poemDisplay.textContent = text;
    //         })
    //     })


    //     fetch(url)
    //         .then(function(response) {
    //             return response.text()
    //         })
    //         .then(function(text) {
    //             poemDisplay.textContent = text;
    //         });

        //Using Arrow functions
        fetch(url)
            .then(response => response.text())
            .then(text =>  poemDisplay.textContent = text);

}

updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';