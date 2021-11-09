import { useEffect, useRef, useState } from 'react';

export const useFetch = ( url ) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({data:null, loading:true, error:null});

    useEffect(() => {

        return () => {
            isMounted.current = false;
        }

    },[])

    useEffect ( ()=>{

        setState({data:null, loading:true,error:null});

        fetch( url )
            .then(resp => resp.json())
            .then(data => {

            // aqui validamos el arreglo no este en cero
			if (data.length === 0) data.push({ 
                quote: 'unknown id' 
            });

            if (isMounted.current){
                setState({
                    loading:false,
                    error:null,
                    data
                });
            }
            })
            .catch (()=>{
                setState({
                    data:null,
                    loading:false,
                    error:'No se pudo cargar la info'});
            })

    }, [url]);

    return state
}
