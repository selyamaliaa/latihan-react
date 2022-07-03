import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import NavigationBar from './components/NavigationBar';

function App() {
  const clicked = () => {
    return alert ("HI");
  }
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar/>
        <img src={logo} className="App-logo" alt="logo" />
        <MyButton clicked={clicked}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
