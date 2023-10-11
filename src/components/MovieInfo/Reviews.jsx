import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReviewsByID } from "API/api";
import css from './Reviews.module.css'

const Reviews = () => {

    const { movieId } = useParams();
    const [review, setReview] = useState('');

    useEffect(() => {
        async function getReviewsDetails() {
            try {
                getReviewsByID(movieId)
                    .then(({ results }) => setReview(results))
            } catch (error) {
                console.log(error)
            }
        }
        getReviewsDetails()
    }, [movieId]);
    
    if (!review) return (
        <div>
        <p>No reviews</p>
        </div>

    );

    return (
        <div>
            <ul className={css.list}>
                {review.map(({ author, content, id }) =>
                    <li className={css.item} key={id}>
                        <h3 className={css.author}>{author}</h3>
                        <p className={css.content}>{content}</p>
                    </li>
                )}
            </ul>

        </div>
    )
};

export default Reviews;