import userEvent from '@testing-library/user-event'
import axios from 'axios'
import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
// import * as yup from 'yup'
import './class.css'


const initialForm = [] //Set the initial form to an empty array
const initialDisabled = true //set the initial value for disabled to true so that the button can't be clicked until validated


export default function Class() {


    //States

    const [formValues, setFormValues] = useState(initialForm)

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

    const getClass = () => {
        axios.get('https://fakeapi.com')
            .then(res => setClassFormState(res.data))
    }

    const postNewClass = newClass => {
        axios.post('https://reqres.in/api/users', newClass)
            .then(({ data }) => {
                setClassFormState([...classFormState, data])
                setFormValues(initialForm)
            })
    }

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
    const formSubmit = event => {
        const newClass = {
        title: formValues.title.trim(),
        source: formValues.source.trim(),
        length: formValues.length.trim(),
        intensity: formValues.intensity.trim(),
        type: formValues.type.trim(),
        location: formValues.location.trim(),
        maxsize: formValues.maxsize.trim(),
        }
    }


    return (

        <div>


            <div className="class-form" onSubmit={formSubmit}>

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


                        <FormGroup>

                            <Button>Create</Button>

                        </FormGroup>

                        <FormGroup>

                            <Button>Edit</Button>

                        </FormGroup>

                         

                    </Form>

                </div>
                
            </div> {/* END THE CLASS FORM DIV HERE */}


        </div>

    )

}
