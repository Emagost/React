import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useNavigate } from '../../../node_modules/react-router-dom/index';
import {useLocation} from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = () => {

    const location = useLocation()
    const { q = ''} = queryString.parse(location.search)
    const navigate = useNavigate();
    
    const  [formValues, handleInputChange] = useForm ({searchText: q});
    
    const {searchText} = formValues;
    
    const heroesFiltered =useMemo(() => getHeroesByName(q), [q])

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${ searchText }`);
    }

    return (
        <>
            <h1>SearchScreen</h1>
            <hr/>
            
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>

                    <form onSubmit={handleSearch}> 
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                            <button
                                type="submit"
                                className="btn m-1 btn-block btn-outline-primary"
                            >
                                Search...
                            </button>
                    </form>
                </div>

                <div className="col-7 animate__animated animate__fadeIn">

                    <h4> Result </h4>
                    <hr/>

                    {
                        (q === '') && 
                        <div class="alert alert-info">
                            Search a hero
                        </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0) && 
                        <div class="alert alert-danger">
                            There is no a hero with { q }
                        </div>
                    }

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    } 
                </div>

            </div>

        </>
    )
}
