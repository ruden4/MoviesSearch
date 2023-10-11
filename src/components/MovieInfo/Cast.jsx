import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCastByID } from "API/api";
import  css from "./Cast.module.css";

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
            <ul className={css.list}>
                {actors.map(({ id, name, character, profile_path }) => <li className={css.item} key={id}>
                    <img src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                        alt={name}
                        width='150'
                        height='225'/>
                    <p className={css.descr}>{name}</p>
                    <p className={css.descr}>Character:{` ${character}`}</p>
                </li>)}
            </ul> 
        </div>
    )
};

export default Cast;