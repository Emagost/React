import { heroes } from "../data/heroes";

const getHeroesById = (id) => {

    return heroes.filter(hero => hero.id === id);

};

export default getHeroesById;