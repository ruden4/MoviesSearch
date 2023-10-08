import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCastByID } from "API/api";

const Cast = () => {
    const { movieId } = useParams();
    const [actors, setActors] = useState('');

    useEffect(() => {
        async function getCastDetails() {
            try {
                getCastByID(movieId)
                    .then(({cast}) => setActors(cast))
            } catch (error) {
                console.log(error)
            }
        }
        getCastDetails()
    }, [movieId]);

    if (!actors) return;

    return (
        <div>
            <ul>
                {actors.map(({ id, name, character, profile_path }) => <li key={id}>
                    <img src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                        alt={name}
                        width='150'
                        height='225'/>
                    <p>{name}</p>
                    <p>Character:{` ${character}`}</p>
                </li>)}
            </ul> 
        </div>
    )
};

export default Cast;