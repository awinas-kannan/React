import React from 'react';
import { useFormik } from 'formik';

//If any one of the initial values are not present in field 
//when accessin it will show error in console 
//A component is changing an uncontrolled input of type text to be controlled.
// Input elements should not switch from uncontrolled to controlled (or vice versa). 
//Decide between using a controlled or uncontrolled input element for the lifetime of the compont
//https://stackoverflow.com/questions/47012169/a-component-is-changing-an-uncontrolled-input-of-type-text-to-be-controlled-erro

export const FromikForm = () => {

    const validateForm = (datas) => {
        const error = {};
        if (!datas.id) {
            error.id = 'Please enter Id'
        }
        if (!datas.name) {
            error.name = 'Please enter Name';
        } else if (datas.name.length > 10) {
            error.name = 'Employee name should not be above 10 chars';
        }
        if (!datas.age) {
            error.age = 'Please enter age'
        }
        return error;
    }
    const formik = useFormik({
        initialValues: {
            id: '11',
            name: '',
            age: ''
        },
        validate: validateForm,
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    });

    return (
        <div>
            <h1>Add Employee</h1>
            <form onSubmit={formik.handleSubmit}>
                <p>
                    <label> <b>Id : </b></label>
                    <input type="text" name='id' id='id' value={formik.values.id} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.id && formik.errors.id ? <span>{formik.errors.id}</span> : null}
                </p>

                <p>
                    <label>  <b>Name : </b></label>
                    <input type="text" name='name' id='name' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.name && formik.errors.name ? <span> {formik.errors.name}</span> : null}
                </p>

                <p>
                    <label> <b>Age :</b></label>
                    <input type="text" name='age' id='age' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.age && formik.errors.age ? <span>{formik.errors.age}</span> : null}
                </p>
                <button type='submit'>Formik Add Employee</button>
            </form>
        </div>
    )

}
