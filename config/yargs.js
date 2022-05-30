
const yargs = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar',
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola',
})
.option('h',{
    alias: 'hasta',
    type: 'number',
    default: 5,
    describre: 'Especifica hasta que número se multpilica, por defecto viene 5. Podes modificarlo a gusto!'
})
.check((argv,options) => {
    if(argv.l === true){
        return argv.l
    }else{
        return argv.b
    }
})
.check((argv,options)=> {
    if(isNaN(argv.b)){
        throw 'La base tiene que ser un número';
    }
    return true
})
.argv


module.exports = yargs;