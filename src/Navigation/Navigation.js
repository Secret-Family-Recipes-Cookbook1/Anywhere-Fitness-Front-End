import React from 'react'
import {
    Navbar,
    NavItem,
} from 'reactstrap'
import { Link } from "react-router-dom";
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

                    <Link to="signup">
                    
                        <NavItem className="nav-item">

                            Sign Up

                        </NavItem>

                    </Link>


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