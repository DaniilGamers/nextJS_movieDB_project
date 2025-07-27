import StarRatings from 'react-star-ratings'
import css from './StarsRating.module.css'


type StarsRatingProps = {
    rating: number | undefined;
}

const StarsRating = ({ rating } : StarsRatingProps) => {

    const safeRating = typeof rating === 'number' ? rating / 2 : 0

    return (
        <div className={css.starRatingBox}>
            <StarRatings
                rating={safeRating}
                starRatedColor="gold"
                numberOfStars={5}
                name='rating'
                starDimension="35px"
                starSpacing="2px"/>
        </div>
    );
};

export default StarsRating;