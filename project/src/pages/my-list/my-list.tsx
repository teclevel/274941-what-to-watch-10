import Footer from '../../components/footer/footer';
import ListFilms from '../../components/list-films/list-films';
import Logo from '../../components/logo/logo';
import SignOut from '../../components/sign-out/sign-out';
import { Films } from '../../types/films';


type MyListProps = {
  films: Films
}

function MyList({ films }: MyListProps): JSX.Element {
  const myListCount = (films.length);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{myListCount}</span></h1>
        <SignOut />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {
            <ListFilms films={films} />
          }
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
