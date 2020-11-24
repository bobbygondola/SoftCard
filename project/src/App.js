import './styles/App.css'
import Navbar from './components/Navbar';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './data/Home'
import Services from './data/Services'
import Products from './data/Products'
import Signup from './data/Signup'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/services" component={Services}/>
        <Route path="/products" component={Products}/>
        <Route path="/sign-up" component={Signup}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
