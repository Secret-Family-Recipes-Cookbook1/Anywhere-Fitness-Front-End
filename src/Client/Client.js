// import userEvent from '@testing-library/user-event'
import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Link, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'
// import * as yup from 'yup'
import './Client.css'

export default function Client(){

        //I will do something here as soon as the backend is up!


    return(

        <div className="home-container">
            
            <div className="fitness">

                <img className="firstimg" src="https://images.pexels.com/photos/1552104/pexels-photo-1552104.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                <p className="fitnessp">Your fitness means the world to us! <br /> Allow us to take some stress off of your shoulders.</p>
                <Link to="/signup" className="join">Join Us Now</Link>

            </div>

            <div className="balance">

                <p className="balancep">Work out whenever - wherever. <br /> <span className="anywhere">Anywhere</span></p>
                <img className="running" src="https://images.pexels.com/photos/936075/pexels-photo-936075.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                
            </div>

            <div className="zoom">

                <img className="zoomimg" src="https://images.pexels.com/photos/946337/pexels-photo-946337.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                <p className="zoomp">Get in the groove wherever you may be <br /> <br /> Climb your own personal mountain <br /> <br /> Our Instructors can do just about anything!</p>

            </div>

        </div> 

    )
}