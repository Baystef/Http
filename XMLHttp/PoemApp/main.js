const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');

verseChoose.onchange = function () {
    let verse = verseChoose.value;
    updateDisplay(verse);
}

function updateDisplay(verse) {
    verse = verse.replace(" ", "").toLowerCase();
    let url = `${verse}.txt`;

    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'text';
    request.onload = function () {
        poemDisplay.textContent = this.response; //equivalent to request.response
    };

    request.send();
}

updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';