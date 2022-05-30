const yargs = require('./config/yargs')
const {crearArchivo, numeros} = require('./helpers/multiplicar.js')
const colors = require('colors');



numeros(yargs.b, yargs.l,yargs.h)
.then(msg => console.log(`La tabla del ${msg} fue creada`.rainbow))
.catch(err => console.log(err))

// console.log(yargs)

// console.log('base:yargs', yargs.b)






// console.log(process.argv)
// const [,,arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=')
// console.log(base)

// const base = 1;
// crearArchivo(base)
// .then(msg => console.log(msg))
// .catch(error => console.log(error))
// .finally(console.log('Todo fue un exito!'))
