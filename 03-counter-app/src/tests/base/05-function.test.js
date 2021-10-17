import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Test functions', () => {
    
    test('Should return an object', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'Emanuel'
        }

        const user = getUser();

        expect(user).toEqual(userTest);

    })
    
    //getUsuarioActivo debe retornar un objeto
    test('Should return an object part2 ', () => {
        
        const userTest = {
            uid: 'ABC567',
            username: 'Emanuel'
        }

        const name = 'Emanuel';

        const user = getUsuarioActivo(name);

        expect(user).toEqual(userTest);
    })
    

})
