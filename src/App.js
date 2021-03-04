import './index'
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import Maze from './components/Maze'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Router>
      <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/maze" exact component={Maze} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;