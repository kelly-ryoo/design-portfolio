import Main from "./Main.js"
import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">KELLY RYOO</h1>
        <nav>
          <Link to="/" className="nav-link"><p className="subtitle">design & art</p></Link>
          <Link to="/websites" className="nav-link"><p className="subtitle">websites</p></Link>
        </nav>
      </header>
      <Main />
    </div>
  );
}

export default App;
