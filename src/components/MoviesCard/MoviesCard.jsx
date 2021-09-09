import "./MoviesCard.css";

const MoviesCard = ({ trailerLink, image, alt, title, duration }) => {
  return (
    <li className="movies-card">
      <a
        className="movies-card__link"
        href={trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movies-card__image"
          src={`https://api.nomoreparties.co${image}`}
          alt={alt}
        />
      </a>
      <div className="movies-card__info">
        <h2 className="movies-card__title">{title}</h2>
        <button className="movies-card__like"></button>
      </div>
      <p className="movies-card__time">{duration}</p>
    </li>
  );
};

export default MoviesCard;
