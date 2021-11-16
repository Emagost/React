import React, { useMemo } from 'react';
import { useParams, useNavigate  } from 'react-router';
import { Navigate } from '../../../node_modules/react-router-dom/index';
import getHeroesById from '../../selectors/getHeroesById';

export const HeroScreen = () => {

    const {heroeId} = useParams();
    const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);
    
    if (!hero) {
        return <Navigate to="/" />;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    const handleReturn = () => {
            return publisher==='DC Comics'?navigate('/dc'):navigate('/marvel');
        }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`/assets/heroes/${ heroeId }.jpg`}
                alt={superhero} 
                className="img-thumbnail animate__animated animate__fadeInLeft" />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>First appearance: </b>{first_appearance}</li>
                </ul>

                <div className="mt-3 ms-3">
                    <h5>Characters</h5>
                    <p>{characters}</p>
                </div>

                <button 
                    className="btn btn-outline-info mt-5 ms-3"
                    onClick={handleReturn}
                    >
                    Return
                </button>

            </div>
        </div>
            
    )
}
