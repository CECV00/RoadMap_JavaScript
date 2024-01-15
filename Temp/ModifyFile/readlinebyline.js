/*
    https://nodejs.org/api/documentation.html
*/
//-----//-----/Librerias/-----//-----//

const fs = require('node:fs'); // --> https://nodejs.org/api/fs.html
const readline = require('node:readline'); // --> https://nodejs.org/api/readline.html
const path = require('node:path');  // --> https://nodejs.org/api/path.html

//-----//-----/Variables/-----//-----//

const utf8 = "utf-8"; // --> Formmato de llectura
const file_readed = "./filetext1.txt"; // --> ubicacion archivo

async function processLineByLine() {
  const fileStream = fs.createReadStream(file_readed);

  const rl = readline.createInterface({
    input: fileStream, 
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    console.log(`${line}`);
  }
}

processLineByLine();
