import React, { useState, useEffect } from 'react'
import './Signin.css'
import * as yup from 'yup';
import axios from "axios";
import schema from '../validation/SignInValidation'
import { Link, useHistory } from "react-router-dom";
import { Form,  FormGroup, Label, Input, Button   } from 'reactstrap';

export default function Signin(props){

    const [signInCredentials, setsignInCredentials] = useState({
        signInEmail: "",
        signInPassword: ""
    })

    const history = useHistory();

    const [errors, setErrors] = useState({ signInEmail: '', signInPassword: '' })
    const [disabled, setDisabled] = useState(true)

    const setFormErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
        .then( () => setErrors({...errors, [name]: ''}))
        .catch(err => setErrors({...errors, [name]: err.errors[0]}))
    }
    

    const change = event => {
        const { checked, value, name, type } = event.target
        const valueChecked = type === 'checkbox' ? checked : value
        setFormErrors(name, valueChecked)
        setsignInCredentials({ ...signInCredentials, [name]: valueChecked })
    }

    const submit = event  => { 
        event.preventDefault()
        // axios.post("https://anytime-fitness.herokuapp.com/api/auth/login", signInCredentials)
        //     .then(res => {
        //         console.log(res);
        //         localStorage.setItem("authToken", res.data.payload);
        //         history.push('/')
        //     })
        //     .catch(err => console.log(err));
       
    }

    useEffect( () => {
        schema.isValid(signInCredentials).then(valid => setDisabled(!valid))
    }, [signInCredentials])   

    return (

        <div className="signin-container">

           <Form className='form-container'
                        onSubmit={submit} >
            <FormGroup> {/* USERNAME */}

            {/* <Label>First Name</Label> */}
            <Input 
                name="signInEmail"
                type="text"
                onChange={change}
                value={signInCredentials.signInEmail}
                // className="form-control-signup"
                placeholder="Email"
                maxLength="18"
            />

            <div className='error-msg' style={{ color: 'red' }}>
            <div>{errors.signInEmail}</div>
            </div>

            </FormGroup>  {/* USERNAME */}


            <FormGroup> 

                            {/* <Label>First Name</Label> */}
                <Input 
                name="signInPassword"
                type="text"
                onChange={change}
                value={signInCredentials.signInPassword}
                placeholder="Password"
                maxLength="18"
                />

                <div className='error-msg' style={{ color: 'red' }}>
                <div>{errors.signInPasswords}</div>
                </div>

            </FormGroup>




                <Button disabled={disabled} className="submit" >Submit</Button>

  

            </Form>

        </div> /* CLOSE CONTAINER DIV */

    )
}