import { useEffect, useMemo, useState, type ChangeEvent } from "react";
import "./MovieList.css";
import MovieCard from "./MovieCard";
import FilterGroup from "../FilterGroup/FilterGroup";
import _ from "lodash";

interface Props {
  type: string;
  title: string;
  emoji: string;
}

interface Movie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  poster_path: string;
}

const MovieList = ({ type, title, emoji }: Props) => {
  const [moviesDetails, setMoviesDetails] = useState<Movie[]>([]);
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (!apiKey) {
          console.warn("VITE_TMDB_API_KEY is not set. Requests may fail.");
        }

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${type}?language=en-US&api_key=${apiKey}&page=1`,
        );

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        setMoviesDetails(data.results as Movie[]);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    setMinRating(0);
    setSort({ by: "default", order: "asc" });
    fetchMovies();
  }, [type, apiKey]);

  const handleRatingFilter = (rating: number) => {
    if (rating === minRating) {
      setMinRating(0);
    } else {
      setMinRating(rating);
    }
  };
  const handleSort = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setSort((prevSort) => ({
      ...prevSort,
      [name]: value,
    }));
  };
  const visibleMovies = useMemo(() => {
    const filtered = moviesDetails.filter(
      (movie: any) => movie.vote_average >= minRating,
    );
    if (sort.by === "default") return filtered;
    return _.orderBy(filtered, [sort.by], [sort.order as "asc" | "desc"]);
  }, [moviesDetails, minRating, sort.by, sort.order]);

  return (
    <section className="allign_center movie_list" id={type}>
      <header className="allign_center movie_list_header">
        <h2 className="allign_center movie_list_heading">
          {title}{" "}
          <img className="navbar_emoji" src={emoji} alt="${emoji} icon" />
        </h2>
        <div className="allign_center">
          <div className="allign_center">
            <FilterGroup
              minRating={minRating}
              onHandleRatingFilter={handleRatingFilter}
              ratings={[8, 7, 6]}
            />
          </div>
          <select
            name="by"
            id=""
            className="movie_sorting"
            onChange={handleSort}
            value={sort.by}
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>

          <select
            name="order"
            id=""
            className="movie_sorting"
            onChange={handleSort}
            value={sort.order}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {visibleMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
            overview={movie.overview.slice(0, 100) + "..."}
            poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}?api_key=${apiKey}`}
            link={`https://www.themoviedb.org/movie/${movie.id}`}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
