import './App.css';
import Routing from './routing';
import axios from 'axios';

axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routing></Routing>
      </header>
    </div>
  );
}

export default App;
