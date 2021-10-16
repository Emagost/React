const nombre   = 'Emanuel';
const apellido = 'Gomez';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;


export function getSaludo( nombre = 'Fiore') {
    return 'Hola ' + nombre + '!';
}

//console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );