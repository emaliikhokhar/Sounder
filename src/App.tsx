import './App.css';

interface IProps {
  intro?: string
}

const Welcome = (props: IProps) => {
  return <>{props.intro}</>
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Welcome intro="Welcome to the landing page"/>
      </header>
    </div>
  );
}

export default App;
