import React from 'react'
import {
    Navbar,
    NavItem,
} from 'reactstrap'
import { Link, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import './Navigation.css'
import Signup from '../signup/Signup'
import Class from '../Instructor/class'

export default function navbar() {

    return (
        <div>
            
                <Navbar className="nav"> {/* Open Nav */}

                    <Link to="/">
                        <NavItem className="logo">

                            Anywhere Fitness

                        </NavItem>
                    </Link>

                   

                        

                           

                            <Route to="/signup">

                                <Link to="/signup">
                        
                                <NavItem className="nav-item">

                                    Sign Up

                                </NavItem>

                                </Link>

                            </Route>

                           

                            <Link to="/create">

                                <NavItem className="nav-item">
                                    Instructor
                                </NavItem>

                            </Link>
                        

                    


                    <Link to="signin">
                        <NavItem className="nav-item">

                            Sign In

                        </NavItem>
                    </Link>

                </Navbar>
            
        </div>
     )
}