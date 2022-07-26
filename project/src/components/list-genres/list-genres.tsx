type ListGenresProps = {
  genres: string[]
}

function ListGenres({ genres }: ListGenresProps): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {
        genres.map((el) => (
          <li key={el} className="catalog__genres-item catalog__genres-item--active">
            <a href="/#" className="catalog__genres-link">{el}</a>
          </li>
        ))
      }
    </ul>
  );
}

export default ListGenres;
