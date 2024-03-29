const fs = require('node:fs'); //common js 

//import { func } from 'prop-types';

//import fs from node.fs //ECMA script

const UTF = 'utf8' // encoding 

const pathfile = 'C:\\Users\\JumperWizard\\Documents\\dev\\RoadMap_JavaScript\\projects\\Generator\\example.txt';


fs.readFile(pathfile, UTF, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  console.log(contar(data));
  

});

 function contar(data){

  const texto = data.toString();

  const cantidad = texto.length;

  return cantidad; 
}

/* Bibliografia  'realizado por Christian  */

