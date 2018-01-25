/**
 * MODULE FILE SYSTEM
 */

var fs = require('fs');
// fs.appendFile('oscar.txt','hello content!',(err)=>{
//     if (err) throw err;
//     console.log('saved!');
// });

// fs.open()  
// el segundo argumento es una flag 'w' para escribir
//abre el documento para escribi, si no existe crea el archivo en blanco
// fs.open('secondfile.txt', 'w', (err, file) => {
//     if(err) throw err;
//     console.log('saved');
// }
// );

//fs.writefile()
//reemplaza el documento y contenido si existe
//si el documento no existe,un documento con el contenido especificado es creado
// fs.writeFile('thirdfile.txt','contenido hola',(err)=>{
// if (err) {
//     throw err;}
//     console.log('saved');
// });
/*********************UPDATE FILES**********************/
//METODOS
//fs.appendFile()
//fs.writeFile()
//agregar texto al final
// fs.appendFile('oscar.txt','este texto fue agregado al final',(err)=>{
//     if(err) throw err;
//     console.log('updated!');
// });

//Reemplazar el documento existente
// fs.writeFile('thirdfile.txt','este es otro texto',(err)=>{
//     if(err) throw err;
//     console.log('replaced!');
// });

/*********************DELETE FILES**********************/
//fs.unlink()
// fs.unlink('oscar.txt',(err)=> {
//     if(err) throw err;
//     console.log('deleted!');
// });
/*********************RENAME FILES**********************/
// fs.rename('secondfile.txt','newfile.txt',(err) => {
//     if(err) throw err;
//     console.log('renamed!');
// });
