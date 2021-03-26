import React, { useState, useEffect } from 'react'
import './Signup.css'
import { Link, useHistory } from "react-router-dom";
import { Form,  FormGroup, Label, Input, Button   } from 'reactstrap';


export default function Signup(props){

    const [signupForm, setSignupForm] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        terms: false,
    })

    const [errors, setErrors] = useState({ firstname: '', lastname: '', password: '', terms: '' })
    const [disabled, setDisabled] = useState(true)
    const [formErrors, setFormErrors] = useState('')
    const [ signupFormState, setsignupFormState] = useState([])
    

    const change = event => {
        const { checked, value, name, type } = event.target
        const valueChecked = type === 'checkbox' ? checked : value
        setFormErrors(name, valueChecked)
        setsignupFormState({ ...signupFormState, [name]: valueChecked })
    }

    const submit = event  => {
        event.preventDefault()
        props.history.push('/')
    }

    return(

        <div className="main-container-signup">

            <h1>Lambda Eats</h1>

            <img src="https://images.pexels.com/photos/4473612/pexels-photo-4473612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>

            <div className="signup-container">

                
                   
                

                <div className="signup-form-heading">
                    <h2>Create an account!</h2>
                </div>

                <Form className="form-container" onSubmit={submit}>

                    <div className="signup-section">




                                                {/* FIRST NAME */}
                        <FormGroup>

                            {/* <Label>First Name</Label> */}
                            <Input 
                                className="fname"
                                name="firstname"
                                type="text"
                                onChange={change}
                                value={signupFormState.firstname}
                                // className="form-control-signup"
                                placeholder="First Name"
                                maxLength="18"
                            />

                            <div className='error-msg' style={{ color: 'red' }}>

                            <div>{errors.firstname}</div>

                            </div>

                        </FormGroup>


                                            {/* LAST NAME */}
                        <FormGroup>

                            {/* <Label>First Name</Label> */}
                            <Input 
                                className="lname"
                                name="lastname"
                                type="text"
                                onChange={change}
                                value={signupFormState.lastname}
                                // className="form-control-signup"
                                placeholder="Last Name"
                                maxLength="30"
                            />

                            <div className='error-msg' style={{ color: 'red' }}>

                            <div>{errors.lastname}</div>

                            </div>

                        </FormGroup>


                                        {/* EMAIL */}
                        <FormGroup>

                            {/* <Label>First Name</Label> */}
                            <Input 
                                className="email-signup"
                                name="email"
                                type="text"
                                onChange={change}
                                value={signupFormState.email}
                                // className="form-control-signup"
                                placeholder="Email"
                                // maxLength="45"
                            />

                            <div className='error-msg' style={{ color: 'red' }}>

                            <div>{errors.email}</div>

                            </div>

                        </FormGroup>


                                            {/* PASSWORD */}
                        <FormGroup>

                            {/* <Label>First Name</Label> */}
                            <Input 
                                className="password-signup"
                                name="password"
                                type="text"
                                onChange={change}
                                value={signupFormState.password}
                                // className="form-control-signup"
                                placeholder="Password"
                                // maxLength="18"
                            />

                            <div className='error-msg' style={{ color: 'red' }}>

                            <div>{errors.password}</div>

                            </div>

                        </FormGroup>


                                            {/* TERMS OF SERVICE BOX */}
                        <FormGroup>

                                    <Label>Terms Of Service</Label>
                            <Input 
                                className="terms"
                                name="terms"
                                type="checkbox"
                                onChange={change}
                                value={signupFormState.terms}
                            />


                        </FormGroup>

                    </div> 

                </Form>

            </div>

        </div>

    )

}