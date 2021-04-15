import React from 'react';
import { useFormik } from 'formik';
import * as YUP from 'yup';

export const FromikYUPForm = () => {


    const formik = useFormik({
        initialValues: {
            id: '11',
            name: '',
            age: '',
            email:''
        },
        validationSchema: YUP.object({
            name: YUP.string().max(10, 'Employee name should not be above 10 chars').required('Please enter Name'),
            age: YUP.string().required('Please enter Age'),
            email: YUP.string().email('Invaild Email Address').required('Please enter email')
        }),
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
                    <input type="text" name='id' {...formik.getFieldProps('id')} />
                    {formik.touched.id && formik.errors.id ? <span>{formik.errors.id}</span> : null}
                </p>

                <p>
                    <label>  <b>Name : </b></label>
                    <input type="text" name='name' {...formik.getFieldProps('name')} />
                    {formik.touched.name && formik.errors.name ? <span> {formik.errors.name}</span> : null}
                </p>

                <p>
                    <label> <b>Age :</b></label>
                    <input type="text" name='age' {...formik.getFieldProps('age')} />
                    {formik.touched.age && formik.errors.age ? <span>{formik.errors.age}</span> : null}
                </p>
                <p>
                    <label> <b>Email :</b></label>
                    <input type="text" name='email' {...formik.getFieldProps('email')} />
                    {formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null}
                </p>
                <button type='submit'>Formik Add Employee</button>
            </form>
        </div>
    )

}
