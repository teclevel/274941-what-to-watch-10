import Main from '../../pages/main/main';

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
  );
}

export default App;
