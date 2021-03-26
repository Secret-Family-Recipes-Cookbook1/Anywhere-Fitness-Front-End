import React from 'react'
import {
    Navbar,
    NavItem,
} from 'reactstrap'
import { Link, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import './Navigation.css'

export default function navbar() {

    return (
        <div>
            <Router>
                <Navbar className="nav"> {/* Open Nav */}

                    <Link to="/">
                        <NavItem className="logo">

                            Anywhere Fitness

                        </NavItem>
                    </Link>

                    <Route to="/signup">

                        <Switch>
                    
                            <NavItem className="nav-item">

                                Sign Up

                            </NavItem>

                        </Switch>

                    </Route>


                    <Link to="signin">
                        <NavItem className="nav-item">

                            Sign In

                        </NavItem>
                    </Link>

                </Navbar>
            </Router>
        </div>
     )
}