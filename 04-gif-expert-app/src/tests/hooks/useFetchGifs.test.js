import { useFetchGifs } from '../../hooks/useFetchGifs'
import {renderHook} from '@testing-library/react-hooks'


describe('test hook useFetchGifs', () => {
    
    test('should return the state initially', async() => {
        
        const {result, waitForNextUpdate} = renderHook( ()=> useFetchGifs( 'The office'));
        const {data, loading} = result.current;

        await waitForNextUpdate();
        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );

    });

    test('should return an array of imgs and loading false', async() => {

        const {result, waitForNextUpdate} = renderHook( ()=> useFetchGifs( 'The office'));
        await waitForNextUpdate();

        const {data, loading} = result.current;

        expect( data.length ).toEqual( 10 );
        expect( loading ).toBe( false );


        
    })
    
    

});
