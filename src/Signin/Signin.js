import React, { useState, useEffect } from 'react'
import './Signin.css'
import { Link, useHistory } from "react-router-dom";
import { Form,  FormGroup, Label, Input, Button   } from 'reactstrap';

export default function Signin(props){
    const [signupForm, setSignupForm] = useState({
        // firstname: '',
        // lastname: '',
        singinemail: '',
        signinpassword: '',
        // pickside: '',
        // terms: false,
    })

    const [errors, setErrors] = useState({ firstname: '', lastname: '', password: '', terms: '' })
    const [disabled, setDisabled] = useState(true)
    const [formErrors, setFormErrors] = useState('')
    const [ signinFormState, setsigninFormState] = useState([])
    

    const change = event => {
        const { checked, value, name, type } = event.target
        const valueChecked = type === 'checkbox' ? checked : value
        setFormErrors(name, valueChecked)
        setsigninFormState({ ...signinFormState, [name]: valueChecked })
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
                value={signinFormState.singinemail}
                // className="form-control-signup"
                placeholder="Email"
                maxLength="18"
            />

            <div className='error-msg' style={{ color: 'red' }}>

            <div>{errors.signinemail}</div>

            </div>

            </FormGroup>  {/* USERNAME */}


            <FormGroup> 

                            {/* <Label>First Name</Label> */}
                <Input 
                // disabled={disabled}
                className="signin-password"
                name="signin-password"
                type="text"
                onChange={change}
                value={signinFormState.signinpassword}
                                // className="form-control-signup"
                placeholder="Password"
                maxLength="18"
                />

                <div className='error-msg' style={{ color: 'red' }}>

                <div>{errors.signinpassword}</div>

                </div>

            </FormGroup>


            <FormGroup>

                <Button className="submit" onSubmit={submit}>Submit</Button>

            </FormGroup>



        </div> /* CLOSE CONTAINER DIV */

    )
}