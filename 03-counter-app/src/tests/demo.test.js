
describe('Pruebas en el archivo demo.test.js', () => {
    
    test('Deben de ser iguales los string ', () => {
        
    
        //1. Inicializacion
        const msg = 'Hello world';
    
        //2. Estimulo
        const msg2= `Hello world`;
    
        //3. Observar el comportamiento
        expect(msg).toBe(msg2);
    
    })
    
})

