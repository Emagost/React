import { useEffect, useState } from 'react'

export const useFetch = ( url ) => {

    const [state, setState] = useState({data:null, loading:true, error:null})

    useEffect ( ()=>{

        setState({data:null, loading:true,error:null})

        fetch( url )
            .then(resp => resp.json())
            .then(data => {

            // aqui validamos el arreglo no este en cero
			if (data.length === 0) data.push({ 
                quote: 'unknown id' 
            });

                setState({
                    loading:false,
                    error:null,
                    data
                })
            })
            .catch(error => setState({
                loading: false,
                error,
                data: null
            }));

    }, [url])

    return state
}