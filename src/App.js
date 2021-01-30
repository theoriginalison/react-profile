import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/" component={AboutMe} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
