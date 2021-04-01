import React, { useState, useEffect } from 'react'
import './Signup.css'
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Form,  FormGroup, Label, Input, Button   } from 'reactstrap';
import * as yup from 'yup';
import schema from '../validation/SignUpValidation'


export default function Signup(props){
    const history = useHistory();
    const [signupCredentials, setSignupCredentials] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        role: '',
        terms: false,
    })

    const [errors, setErrors] = useState({ name: '', username: '', email: '', password: '', role: '' , terms: '' })
    const [disabled, setDisabled] = useState(true)
    
    const setFormErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
            .then(() => setErrors({ ...errors, [name]: '' }))
            .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
    }
    

    const change = event => {
        const { checked, value, name, type } = event.target
        const valueChecked = type === 'checkbox' ? checked : value
        setFormErrors(name, valueChecked)
        setSignupCredentials({ ...signupCredentials, [name]: valueChecked })
    }

    const submit = event  => {
        event.preventDefault()
        axios.post("https://anytime-fitness.herokuapp.com/api/auth/register", signupCredentials)
        .then(res => {
          console.log(res);
          localStorage.setItem("authToken", res.data.payload);
          history.push('/')
        })
        .catch(err => console.log(err));
        
    }


    useEffect(() => {
        schema.isValid(signupCredentials).then(valid => setDisabled(!valid))
    }, [signupCredentials])
    
    return(

        <div className="main-container-signup">
            <div className="signup-container">

                <div className="signup-form-heading">
                    <h2>Create an account!</h2>
                </div>

                <Form className="form-container" onSubmit={submit}>
                    <div className="signup-section">
                        <FormGroup>
                            
                            <Input 
                                className="fname"
                                name="name"
                                type="text"
                                onChange={change}
                                value={signupCredentials.name}
                                placeholder="Name"
                                maxLength="18"
                            />

                            <div className='error-msg' style={{ color: 'red' }}>
                            <div>{errors.name}</div>
                            </div>
                        </FormGroup>


                                            {/* LAST NAME */}
                        <FormGroup>
                            
                            <Input 
                                className="lname"
                                name="username"
                                type="text"
                                onChange={change}
                                value={signupCredentials.username}
                                placeholder="UserName"
                                maxLength="30"
                            />

                            <div className='error-msg' style={{ color: 'red' }}>
                            <div>{errors.username}</div>
                            </div>
                        </FormGroup>


                                        {/* EMAIL */}
                        <FormGroup>
                            
                            <Input 
                                className="email-signup"
                                name="email"
                                type="text"
                                onChange={change}
                                value={signupCredentials.email}
                                placeholder="Email"
                            />

                            <div className='error-msg' style={{ color: 'red' }}>
                            <div>{errors.email}</div>
                            </div>
                        </FormGroup>


                                            {/* PASSWORD */}
                        <FormGroup>
                           
                            <Input 
                                className="password-signup"
                                name="password"
                                type="text"
                                onChange={change}
                                value={signupCredentials.password}
                                
                                placeholder="Password"
                                
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
                                value={signupCredentials.terms}
                            />
                            <div className='error-msg' style={{ color: 'red' }}>
                            <div>{errors.terms}</div>
                            </div>
                        </FormGroup>

                                    {/* DROP DOWN */}
                        <FormGroup>
                            <Input 
                            type="select"
                            onChange={change}
                            value={signupCredentials.role}
                            name="role"
                            >
                                <option value=''>Choose Account Type</option>
                                <option value="instructor">Instructor</option>
                                <option value="student">Student</option>


                            </Input>
                            <div className='error-msg' style={{ color: 'red' }}>
                            <div>{errors.role}</div>
                            </div>
                        </FormGroup>

                        <FormGroup>
                            <Button disabled={disabled} className="submit" onSubmit={submit}>Submit</Button>
                        </FormGroup>

                    </div> 

                </Form>

            </div>

        </div>

    )

}