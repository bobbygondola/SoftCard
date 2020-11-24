import './styles/App.css'
import Navbar from './components/Navbar';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './data/Home'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
