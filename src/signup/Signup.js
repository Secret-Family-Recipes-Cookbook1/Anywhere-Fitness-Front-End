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

        <div className="signup-container">

            <div className="signup-form-heading">
                <h2>Create an account!</h2>
            </div>

            <Form className="form-container" onSubmit={submit}>

                <div className="signup-section">

                    <FormGroup>

                        <Label>First Name</Label>
                        <Input 
                            name="firstname"
                            type="text"
                            onChange={change}
                            value={signupFormState.firstname}
                            className="form-control-signup"
                            placeholder="First Name"
                            maxLength="18"
                        />

                        <div className='error-msg' style={{ color: 'red' }}>

                        <div>{errors.firstname}</div>

                        </div>

                    </FormGroup>

                </div>

            </Form>

        </div>

    )

}