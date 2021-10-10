//1. Transformar a funcion flecha
//2. Tiene que retornar a un objeto implicito


function getUsuarioActivo(nombre) {
    return{
        uid:'ABC567',
        username: nombre,
    }
};

const user = getUsuarioActivo('Emanuel');
console.log(user);


//1 funcion flecxha
const getUsuarioActivoFlecha = (nombre) => {
    return{
        uid:'ABC567',
        username: nombre,
    }
}

console.log(getUsuarioActivoFlecha('Emanuel Flecha'));

// 2- objeto implicito
const getUsuarioActivoObjeto = (nombre) => ({
    uid:'ABC567',
    username: nombre,
})

console.log(getUsuarioActivoObjeto('Emanuel Objeto'));