// import logo from './logo.svg';
import './App.css';
import Nav from './Navigation/Navigation'
import Signup from './signup/Signup'
import Signin from './Signin/Signin'
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'
// import { Switch, Route } from 'react-router-dom' 

function App() {
  return (
    <div className="App">
      <Router> 

        <Nav />

        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />

      </Router>

    </div>
  );
}


export default App;
