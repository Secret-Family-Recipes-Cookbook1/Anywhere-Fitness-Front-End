
import './App.css';
import Nav from './Navigation/Navigation'
import Signup from './signup/Signup'
import Signin from './Signin/Signin'
import Class from './Instructor/class'
import Client from './Client/Client'
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router> 

        <Nav />

        <Route exact path="/" component={Client}/>

        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/create" component={Class} />
 
      </Router>

    </div>
  );
}


export default App;
