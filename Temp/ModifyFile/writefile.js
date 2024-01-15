/*
    https://nodejs.org/api/documentation.html
*/
//-----//-----/Librerias/-----//-----//
const fs = require("fs/promises"); // --> https://nodejs.org/api/fs.html
const path = require("path"); // --> https://nodejs.org/api/path.html
const utf8 = "utf-8"; // --> Formmato de llectura
const file_readed = "./filetext1.txt"; // --> ubicacion archivo

//-----//-----/Method for find file/-----//-----//
const file_path = path.join(__dirname, file_readed);

//-----//-----/Method for read file/-----//-----//
async function myWriteFileFuncPromise() {
  try {
    const content = "Some content!";
    await fs.writeFile(file_readed, content);
  } catch (err) {
    console.log(err);
  }
}

async function myWriteFileFuncPromisev2() {
  try {
    const content = "\nSome content!";
    fs.writeFile(file_readed, content, { flag: "a+" }, (err) => {});
  } catch (err) {
    console.log(err);
  }
}

myWriteFileFuncPromisev2();
