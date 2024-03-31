const fs = require('fs');
const path = require('path');

const dataDirectory = path.join(__dirname, 'data');

if (!fs.existsSync(dataDirectory)) {
  fs.mkdirSync(dataDirectory);
  console.log('Data directory does not exist, no need to clean up.');
} else {
  fs.rmSync(dataDirectory, { recursive: true });
  console.log('Data directory removed successfully.');
}
