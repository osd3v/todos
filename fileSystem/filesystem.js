/**
 * todos los metodos de FS tienen una version 
 * sincronica y asincronica
 * Es mejor usar metodos asicronicos, debido a que no bloquea el programa
 * durante sus ejecucion
 * ASINCRONO {ultimo parametro callback}{primer parametro callbak en caso de error}
 * 
 */
const fs = require('fs');
/**
 * Read files
 */
//lectura asincronica
//el documento debe de existir
// fs.readFile('inputfile.txt', (err, data) => {
//     if (err) console.error(err);
//     console.log("lectura asicrona: " + data);
// });
//lectura sincronica
// var data = fs.readFileSync('inputfile.txt');
// console.log('lectura sincronica: ' + data);
/**
 * STAT
 * obtener informacion de un documento
 *  fs.stat(path,callback)
 */

fs.stat('./node_modules', (err, stats) => {
    if (err) throw err;
    console.log(stats);
    console.log('is file?'+stats.isFile());
    console.log('is directory?'+stats.isDirectory());
});