import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/contact" component={Contact} />
            {/* <Route exact path="/home" component={Home} />
            <Route exact path="/favorites" component={FavoritesList} />
            <Route exact path="/posts/:id" component={Detail} />
            <Route component={NoMatch} /> */}
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
