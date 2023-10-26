const fs = require("fs"); // file system

//-----//-----//-----//-----//-----//-----//-----//-----//-----//
//  method for read file

try {
  const data = fs.readFileSync('./filetext1.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}

//-----//-----//-----//-----//-----//-----//-----//-----//-----//
//  method for write file

async function myWritingFile() {
  const content = 'Some content!';
  try {
    await fs.appendFile('./filetext1.txt', content);
  } catch (err) {
    console.log(err);
  }
}
myWritingFile();