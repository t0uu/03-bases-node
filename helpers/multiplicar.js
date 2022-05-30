const fs = require('fs');
const colors = require('colors')

// const crearArchivo = async(base) => { 
//    try{
//        console.log('===============')
//        console.log(`Tabla del ${base}`)
//        console.log('===============')
//        let salida = '';
//        for (let i = 1; i <= 10; i++) { 
//            salida += `${base} x ${i} = ${i * base}\n`;
//         }
//         console.log(salida)
//         fs.writeFileSync(`tabla-${base}.txt`,salida)
//         return `tabla-${base}`
//     }catch(err){
//         throw err
//     }
    

// };
const crearArchivo = (base,l,hasta) => { 
    return new Promise((resolve,reject)=> {
        let salida = '';
        let consola = '';
        if(base <= 0 || l == false){
            for (let i = 1; i <= hasta; i++) { 
                salida += `${base} x ${i} = ${i * base}\n`;
            }
            fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)
            console.log(`tabla-${base}.txt creada`)
            reject(`no se crea la lista`)
    }else{
        resolve(base,l,hasta)
        console.log('===============')
        console.log(`Tabla del ${base}`)
        console.log('===============')
    for (let i = 1; i <= hasta; i++) { 
        consola += colors.red(`${base} x ${i} = ${i * base}\n`.zebra);
        salida += ` ${base} x ${i} = ${i * base}\n` ;
    }
    console.log(consola)
    fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)
    } 
});
};

const getNumeros = async(base,l,hasta) => {
    try{
        const numeros = await crearArchivo(base,l,hasta)
        return numeros
    }catch(error){
        // Si en vez de retornar enviamos un throw llamamos el reject de la promesa
        throw error
    }

}


module.exports = {
    crearArchivo: crearArchivo,
    numeros:getNumeros
}
