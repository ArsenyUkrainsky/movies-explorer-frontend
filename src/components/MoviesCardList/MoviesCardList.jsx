import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

const MoviesCardList = ({ movies }) => {
  return (
    <ul className="movies-card-list">
      {movies.map((movie) => {
        /* console.log(movie); */
        return (
          <MoviesCard
            key={movie.id}
            trailerLink={movie.trailerLink}
            image={movie.image.url}
            alt={movie.nameEN}
            title={movie.nameRU}
            duration={movie.duration}
          />
        );
      })}
    </ul>
  );
};
export default MoviesCardList;
