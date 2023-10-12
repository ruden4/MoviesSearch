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
            {actors.length? <ul className={css.list}>
                {actors.map(({ id, name, character, profile_path }) => <li className={css.item} key={id}>
                    <img src={profile_path ? `https://image.tmdb.org/t/p/w300${profile_path}`
                        : 'https://sneg.top/uploads/posts/2023-06/1687806511_sneg-top-p-avatarka-zaglushka-pinterest-3.png'}
                        alt={name}
                        width='150'
                        height='225'/>
                    <p className={css.descr}>{name}</p>
                    <p className={css.descr}>Character:{` ${character}`}</p>
                </li>)}
            </ul>  : <h2>Sorry, no cast!</h2>}
            
        </div>
    )
};

export default Cast;