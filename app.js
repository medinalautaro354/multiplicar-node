const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar').default;

//de express
//const fs = requiere('express');
//de nuestra pc
//const fs = requiere('./fs');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        .then(tabla => console.log(`Tabla del ${ argv.base } hasta el ${ argv.limite}`))
        .catch(e => console.log(e))
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then(archivo => console.log(`Archivo creado: ${ archivo }`))
        .catch(e => console.log(e))
        break;
    default:
        console.log('Comando no reconocido');

}

//console.log(argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];


// multiplicar.crearArchivo(base)
//     .catch(err => console.log(err));