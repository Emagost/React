const personajes = ['Emanuel','Julian','Erik']
console.log(personajes)

const [ , ,p3 ] = personajes;

//console.log(p3);


const retornaArreglo = () =>{
    return['ABC',123];
}

const [letras,numeros] = retornaArreglo();

//console.log(letras,numeros)

//Tarea
//1. El primer valor del arreglo se llamara nombre
//2. se llamara setNombre
const useState = (valor) => {
    return [valor,()=>{console.log('Hola mundo')}];
}

const [nombre,setNombre] = useState('Emanuel')
console.log(nombre)
setNombre();