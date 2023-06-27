const fs = require('node:fs/promises');
const filePath = __dirname + '/events.json';
async function readData() {
  
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data);
}

async function writeData(data) {
  await fs.writeFile(filePath, JSON.stringify(data));
}

exports.readData = readData;
exports.writeData = writeData;
