import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../datos/heroes";

describe('Test import and export function heroes', () => {
    
    test('should return a heroe for id ', () => {
        
        const id = 1;
        const idTest = 1; 

        const heroe = getHeroeById(id);

        const heroeData = heroes.find ( h => h.id === idTest);

        expect ( heroe ).toEqual ( heroeData );

    })

    test('should return undefined if heroes dont exist ', () => {
        
        const id = 10;

        const heroe = getHeroeById(id);

        expect ( heroe ).toBe(undefined);

    })

    //debe retornar un arreglo con los heroes de DC
    //toEqual al arreglo filtrado
    test('should return array with heroes from DC', () => {
        
        const owner = 'DC';
        const ownerTest = 'DC';

        const heroe = getHeroesByOwner(owner);

        const heroeData = heroes.filter ( h => h.owner === ownerTest)

        expect ( heroe ).toEqual ( heroeData ); 

    })
    

    //debe retornar un arreglo de los heroes de marvel
    //lenght = 2  // toBe
    test('should return an array with length equal than two', () => {
        
        const ownerTest = 'Marvel';

        const heroeData = heroes.filter ( h => h.owner === ownerTest).length

        expect ( heroeData ).toBe ( 2 ); 

    })
})
