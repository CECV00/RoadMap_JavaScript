/*
    https://nodejs.org/api/documentation.html
*/
//-----//-----/Librerias/-----//-----//

const fs = require("node:fs/promises"); // --> https://nodejs.org/api/fs.html
const path = require("node:path"); // --> https://nodejs.org/api/path.html
const utf8 = "utf-8";

//-----//-----/Method for find absolute path/-----//-----//
const absolutepath = path.join(__dirname, "./filetext1.txt");
console.log(absolutepath);

//-----//-----/Method for read file/-----//-----//
const myReadFileFucn = async () => {
  const file = await fs.readFile(absolutepath, "utf-8");
  console.log(file);
};
myReadFileFucn();

//-----//-----/Method for write file/-----//-----//
async function myWriteFileFunc() {
  try {
    const content = "\nSome content!";
    await fs.appendFile(absolutepath, content);
  } catch (err) {
    console.log(err);
  }
}
myWriteFileFunc();
//-----//-----/Method for read file/-----//-----//
// fs.writeFileSync(absolutepath, "helloworld!", "utf-8"); //cuidado transpone texto

//-----//-----//-----//-----//
fs.readFile("./test2.txt", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }

  console.log(data);
});
//-----//-----//-----//-----//

//-----//-----//-----//-----//

/*
    +  no es bueno usar rutas relativas, es mejor usar rutas adsolutas.
*/
