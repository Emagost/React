import { renderHook,act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';


describe('Test useForm', () => {
    const initialForm = {
        name:'Emanuel',
        email: 'email@email.com'
    };


    test('should return a form', () => {
        
        const {result}  = renderHook(() => useForm(initialForm) );

        const [formValues, handleInputChange, reset] = result.current;

        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

    });
    
    test('should return a form (change name)', () => {
        
        const {result}  = renderHook(() => useForm(initialForm) );
        const [, handleInputChange] = result.current;

        act(() => {
            handleInputChange({
                target:{
                    name:'name',
                    value: 'Facundo'
                }
            });
        });

        const [formValues] = result.current;

        expect(formValues).toEqual({...initialForm, name:'Facundo'});


    });
    
    test('should reset a form using reset', () => {

        const {result}  = renderHook(() => useForm(initialForm) );
        const [, handleInputChange,reset] = result.current;

        act(() => {
            handleInputChange({
                target:{
                    name:'name',
                    value: 'Facundo'
                }
            });
            reset();
        });

        const [formValues] = result.current;

        expect(formValues).toEqual(initialForm);
        
    });
    

});
