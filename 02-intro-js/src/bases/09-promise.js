import { getHeroesById } from './bases/08-imp-exp';

/* const promise = new Promise((resolve, reject) => {

    setTimeout( () => {
        const heroe = getHeroesById(3);
        resolve(heroe);
        reject('No se pudo encotrar el heroe')
    },2000)
    
});

promise.then((heroe) => {
    console.log('heroe',heroe)
})
.catch((err) => console.warn(err)); */

const getHeroesByIdAsync = (id) =>{

    return new Promise((resolve, reject) => {

        setTimeout( () => {
            const heroe = getHeroesById(id);
            if (heroe){
                resolve(heroe);
            }else{
                reject('No se pudo encotrar el heroe')
                }
            },2000)
        
        })
    }
    getHeroesByIdAsync(1)
            .then(console.log)
            .catch(console.warn);

