// import Main from '../../pages/main/main';
// import SignIn from '../../pages/sign-in/sign-in';

import MyList from '../../pages/my-list/my-list';

type AppProps = {
  filmPromo: {
    title: string,
    genre: string,
    release: number
  }
}

function App({ filmPromo }: AppProps): JSX.Element {
  return (
    // <Main filmPromo={filmPromo} />
    // <SignIn/>
    <MyList/>
  );
}

export default App;
