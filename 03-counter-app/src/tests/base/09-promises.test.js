import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../datos/heroes";

describe('Test promises', () => {
    
    test('sould return a heroe async', ( done ) => {
    
        const id = 1;

        getHeroeByIdAsync(id)
                .then (heroe =>{
                    expect(heroe).toBe(heroes[0]);
                    done();
                })

    });

    test('should return error if heroe dont exist', ( done ) => {
        
        const id = 10;

        getHeroeByIdAsync(id)
                .catch(error =>{
                    expect(error).toBe('No se pudo encontrar el héroe');
                    done();
                })

    })
    
    

})
