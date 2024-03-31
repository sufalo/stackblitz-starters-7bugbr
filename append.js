const fs = require('fs');
const path = require('path');

const arguments = process.argv.slice(2);
const textToAppend = arguments.join(' ');

const filePath = path.join(__dirname, 'data', 'notes.txt');

fs.appendFile(filePath, textToAppend + '\n', (err) => {
    if (err) {
        console.error('Błąd podczas dodawania tekstu do pliku notes.txt:', err);
    } else {
        console.log('Pomyślnie dodano tekst do pliku notes.txt.');
    }
});
