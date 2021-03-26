import React, { useState, useEffect } from 'react'
import './Signin.css'
import { Link, useHistory } from "react-router-dom";
import { Form,  FormGroup, Label, Input, Button   } from 'reactstrap';

export default function Signin(props){
    const [signupForm, setSignupForm] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        pickside: '',
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


    return (

        <div className="signin-container">

            <FormGroup> {/* USERNAME */}

            {/* <Label>First Name</Label> */}
            <Input 
                className="signin-email"
                name="signin-email"
                type="text"
                onChange={change}
                value={signupFormState.email}
                // className="form-control-signup"
                placeholder="Email"
                maxLength="18"
            />

            <div className='error-msg' style={{ color: 'red' }}>

            <div>{errors.email}</div>

            </div>

            </FormGroup>  {/* USERNAME */}


            <FormGroup>

                            {/* <Label>First Name</Label> */}
                <Input 
                className="password"
                name="password"
                type="text"
                onChange={change}
                value={signupFormState.password}
                                // className="form-control-signup"
                placeholder="Password"
                maxLength="18"
                />

                <div className='error-msg' style={{ color: 'red' }}>

                <div>{errors.password}</div>

                </div>

            </FormGroup>


            <FormGroup>

                <Button className="submit" onSubmit={submit}>Submit</Button>

            </FormGroup>



        </div> /* CLOSE CONTAINER DIV */

    )
}