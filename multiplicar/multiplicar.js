const fs = require('fs');
const colors = require('colors');


let crearArchivo = async (base, limite = 10) => {
    if (!Number(base)) {
        return console.log(`El valor introducito ${base} no es un numero`);
    }
    let data = '';
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}-al${limite}.txt`, data, (err) => {
        if (err) 
        throw err;
        return console.log(`El archivo `+ `tabla-${base}-al${limite}.txt`.green + ` ha sido creado`);
    });
}

let listarTabla = async (base, limite = 10) => {

    console.log('================='.green);
    console.log(`===tabla de ${ base }===`.red);
    console.log('================='.green);
    
    for (i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}