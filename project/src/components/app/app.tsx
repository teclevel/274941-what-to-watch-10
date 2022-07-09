import Main from '../../pages/main/main';
// import SignIn from '../../pages/sign-in/sign-in';
// import MyList from '../../pages/my-list/my-list';
// import FilmPage from '../../pages/film-page/film-page';
// import AddReview from '../../pages/add-review/add-review';
// import Player from '../../pages/player/player';

type AppProps = {
  filmPromo: {
    title: string,
    genre: string,
    release: number
  }
}

function App({ filmPromo }: AppProps): JSX.Element {
  return (
    <Main filmPromo={filmPromo} />
    // <SignIn/>
    // <MyList/>
    // <FilmPage/>
    // <AddReview />
    // <Player />
  );
}

export default App;
