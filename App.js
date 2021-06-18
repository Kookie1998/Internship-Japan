import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import Login from './components/pages/Login.js';
import Home from './components/pages/Home.js';
import Register from './components/pages/Register';
import User from './components/pages/User';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
     <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/Login">
            <Login/>
          </Route>
          <Route exact path="/Register">
            <Register/>
          </Route>
          <Route exact path="/Account">
            <User/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;