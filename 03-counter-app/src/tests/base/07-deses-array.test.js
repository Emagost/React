import { retornaArreglo } from "../../base/07-deses-arr"

describe('Test destructuring arrays', () => {
    
    test('should return string and number ', () => {

        const arr = retornaArreglo();
        const arrTest = ['ABC', 123];
 
        expect(arr).toEqual(arrTest);
        
    })

    test('should return string and number part2 ', () => {
        
        const [letras, numeros] = retornaArreglo();

        //console.log(typeof letras)

        expect(letras).toBe('ABC');
        // expect(typeof letras).toBe('string');
        
        expect(numeros).toBe(123);
        //expect(typeof numeros).toBe('numbres');


    })
    
    
})
