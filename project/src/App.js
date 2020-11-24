import './styles/App.css'
import Navbar from './components/Navbar';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" />
      </Switch>
    </div>
  );
}

export default App;
