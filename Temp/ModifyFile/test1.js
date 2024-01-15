/*
    https://nodejs.org/api/documentation.html
*/
//-----//-----/Librerias/-----//-----//

const fs = require('node:fs'); // --> https://nodejs.org/api/fs.html
const path = require('node:path');  // --> https://nodejs.org/api/path.html

//-----//-----/Method for find absolute path/-----//-----//
const absolutepath = path.join(__dirname, "./filetext1.txt")
console.log(absolutepath)
//-----//-----/Method for read file/-----//-----//
const file = fs.readFileSync(absolutepath, "utf-8")
console.log(file);
//-----//-----/Method for read file/-----//-----//
fs.writeFileSync(absolutepath, "helloworld!", "utf-8") //cuidado transpone texto

//-----//-----//-----//-----//

//-----//-----//-----//-----//

//-----//-----//-----//-----//

/*
    +  no es bueno usar rutas relativas, es mejor usar rutas adsolutas.
*/









