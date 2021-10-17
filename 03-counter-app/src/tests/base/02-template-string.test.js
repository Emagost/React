import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";


describe('Test 02-template-string.js', () => {
    
    test('getSaludo return a name ', () => {

        const name = 'Emanuel';
        
        const greeting = getSaludo( name );

        expect( greeting ).toBe('Hola ' + name + '!');

        //console.log(greeting);
    })
    
    //getSaludo debe retornar Hola Fiore! si no hay argumento name
    test('getSaludo debe retornar Hola Fiore! si no hay argumento name ', () => {

        const greeting = getSaludo();

        expect ( greeting ).toBe('Hola Fiore!')

    
        
    })
    

})
