const fs = require('fs');
const path = require('path');

const dataDirectory = path.join(__dirname, 'data');
const notesFile = path.join(dataDirectory, 'notes.txt');

if (!fs.existsSync(dataDirectory)) {
    fs.mkdirSync(dataDirectory);
    console.log('Utworzono katalog data.');
}

if (!fs.existsSync(notesFile)) {
    fs.writeFileSync(notesFile, 'Node.js is awesome!\n', (err) => {
        if (err) {
            console.error('Błąd podczas tworzenia pliku notes.txt:', err);
        } else {
            console.log('Utworzono plik notes.txt z zawartością: "Node.js is awesome!"');
        }
    });
} else {
    console.log('Plik notes.txt już istnieje w katalogu data.');
}
