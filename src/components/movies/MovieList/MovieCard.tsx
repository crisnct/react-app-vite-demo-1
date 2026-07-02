import "./MovieCard.css";
import Star from "../../../assets/star.png";

interface Props {
  link: string;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  poster: string;
}

const MovieCard = ({
  link,
  title,
  release_date,
  vote_average,
  overview,
  poster,
}: Props) => {
  return (
    <a
      href={link}
      className="movie_card"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={poster} alt={title} className="movie_poster" />
      <div className="movie_details">
        <h3 className="movie_details_heading">{title}</h3>
        <div className="allign_center movie_date_rate">
          <p>{release_date}</p>
          <p>
            {vote_average}{" "}
            <img src={Star} alt="rating icon" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">{overview}</p>
      </div>
    </a>
  );
};

export default MovieCard;
