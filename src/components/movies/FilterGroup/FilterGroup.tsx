import "./FilterGroup.css";

interface Props {
  minRating: number;
  onHandleRatingFilter: (rating: number) => void;
  ratings: number[];
}

const FilterGroup = ({ minRating, onHandleRatingFilter, ratings }: Props) => {
  return (
    <div className="allign_center">
      <ul className="movie_filter allign_center">
        {ratings.map((rating) => (
          <li
            className={
              minRating === rating
                ? "movie_filter_item active"
                : "movie_filter_item"
            }
            onClick={() => onHandleRatingFilter(rating)}
            key={rating}
          >
            {rating}+Star
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterGroup;
