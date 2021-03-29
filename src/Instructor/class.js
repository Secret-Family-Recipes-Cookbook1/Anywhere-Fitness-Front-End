import userEvent from '@testing-library/user-event'
import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
// import * as yup from 'yup'
import './class.css'




export default function Class() {

    //Initialize the class state here and give it key values

    const [ classFormState, setClassFormState ] = useState({
        title: '',
        source: '',
        length: '',
        intensity: '',
        type: '',
        location: '',
        maxsize: '',
        currentatt: '',
    })

    //Initialize errors here and set it to an object state

    const [ errors, setErrors ] = useState({
        title: '',
        source: '',
        length: '',
        intensity: '',
        type: '',
        location: '',
        maxsize: '',
        currentatt: '',
    })

    //Set disabled for the button here

    const [ disabled, setDisabled ] = useState(true)

    //helper function for onChange

    const change = event => {
        const { checked, value, name, type } = event.target
        const valueChecked = type === 'checkbox' ? checked : value
        setErrors(name, valueChecked)
        setClassFormState({ ...classFormState, [name]: valueChecked })
    }

    //Button function for when you submit the class
    const submit = event => {

    }


    return (

        <div>


            <div className="class-form" onSubmit={submit}>

                <h5>Hello Instructor! Let's get a class setup</h5>

                <div className="class-creator">

                    <Form>

                        <FormGroup>

                            <Input 
                                type='text'
                                name='title'
                                placeholder='Class Title'
                                onChange={change}
                                value={classFormState.title}
                                className="class-title"
                            />

                            <div className='error-msg' style={{ color: 'red' }}>
                                <div>{errors.title}</div>
                            </div>
                        </FormGroup>

                        <div className="spacer"></div>

                        <FormGroup>

                            <Input 
                                type='text'
                                name='length'
                                placeholder='Class Duration'
                                onChange={change}
                                value={classFormState.length}
                                className="class-length"
                            />

                            <div className='error-msg' style={{ color: 'red' }}>
                                <div>{errors.length}</div>
                            </div>
                        </FormGroup>

                        <div className="spacer"></div>

                        <FormGroup>

                            <Input 
                                type='select'
                                name='intensity'
                                placeholder='Class Intensity'
                                onChange={change}
                                value={classFormState.intensity}
                                className="class-intensity"
                            >
                                <option>Select Intensity</option>
                                <option>Easy</option>
                                <option>Normal</option>
                                <option>Difficult</option>
                                <option>Pro</option>
                            </Input>

                            <div className='error-msg' style={{ color: 'red' }}>
                                <div>{errors.intensity}</div>
                            </div>
                        </FormGroup>

                        <div className="spacer"></div>

                        <FormGroup>

                            <Input 
                                type='text'
                                name='type'
                                placeholder='Workout Type'
                                onChange={change}
                                value={classFormState.type}
                                className="class-type"
                            />

                            <div className='error-msg' style={{ color: 'red' }}>
                                <div>{errors.type}</div>
                            </div>
                        </FormGroup>

                        <div className="spacer"></div>

                        <FormGroup>

                            <Input 
                                type='text'
                                name='location'
                                placeholder='Where?'
                                onChange={change}
                                value={classFormState.location}
                                className="class-location"
                            />

                            <div className='error-msg' style={{ color: 'red' }}>
                                <div>{errors.location}</div>
                            </div>
                        </FormGroup>

                        <div className="spacer"></div>

                        <FormGroup>

                            <Input 
                                type='text'
                                name='maxsize'
                                placeholder='Max Attendees'
                                onChange={change}
                                value={classFormState.maxsize}
                                className="class-maxsize"
                            />

                            <div className='error-msg' style={{ color: 'red' }}>
                                <div>{errors.maxsize}</div>
                            </div>
                        </FormGroup>

                        <div className="spacer"></div>

                                            {/* Current Attendee amount will go here */}
                        {/* <FormGroup>

                            <Input 
                                type='text'
                                name='type'
                                placeholder='Workout Type'
                                onChange={change}
                                value={classFormState.type}
                                className="class-type"
                            />

                            <div className='error-msg' style={{ color: 'red' }}>
                                <div>{errors.type}</div>
                            </div>
                        </FormGroup> */}

                    </Form>

                </div>
                
            </div> {/* END THE CLASS FORM DIV HERE */}


        </div>

    )

}
