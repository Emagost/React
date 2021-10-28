import { getGifs } from '../../helpers/getGifs';

describe('Test getGifs Fecht', () => {
    
    test('should return 10 elements', async() => {
        
        const gifs= await getGifs('The Office')
        expect(gifs.length).toBe(10);
    })

    test('should return 10 elements with not params', async() => {
        
        const gifs= await getGifs('');
        expect(gifs.length).toBe(0);
    })
    

})
