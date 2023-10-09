import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReviewsByID } from "API/api";

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
            <ul>
                {review.map(({ author, content, id }) =>
                    <li key={id}>
                        <h3>{author}</h3>
                        <p>{content}</p>
                    </li>
                )}
            </ul>

        </div>
    )
};

export default Reviews;