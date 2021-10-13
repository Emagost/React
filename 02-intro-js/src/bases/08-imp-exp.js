//import heroes,{owner} from '../data/heroes';
import heroes from '../data/heroes';

export const getHeroesById = (id) => heroes.find(e=>e.id===id)


//console.log('First', getHeroesById(2));


// export const gerHeroesByOwner = (owner) => heroes.filter(e=>e.owner===owner)


//console.log('Second',gerHeroesByOwner('DC'))