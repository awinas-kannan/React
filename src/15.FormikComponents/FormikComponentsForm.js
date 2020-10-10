import React from 'react';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import * as YUP from 'yup';

export const FromikComponentForm = () => {


    const formik = useFormik({
        initialValues: {
            id: '11',
            name: '',
            age: '',
            email: ''
        },
        validationSchema: YUP.object({
            name: YUP.string().max(10, 'Employee name should not be above 10 chars').required('Please enter Name'),
            age: YUP.string().required('Please enter Age'),
            email: YUP.string().email('Invaild Email Address').required('Please enter Name')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    });

    return (
        <Formik initialValues={{
            id: '11',
            name: '',
            age: '',
            email: '',
            desg: ''
        }} validationSchema={YUP.object({
            name: YUP.string().max(15, 'Employee name should not be above 10 chars').required('Please enter Name'),
            age: YUP.string().required('Please enter Age'),
            email: YUP.string().email('Invaild Email Address').required('Please enter Name')
        })} onSubmit={values => {
            alert(JSON.stringify(values));
        }} >
            {
                 (propertiez) => {
                    return (
                        <Form>
                            <h5>Create Employeee</h5>
                            <p>
                                <label> <b>Id: </b></label>
                                <Field type="text" name='id' />
                                <ErrorMessage name='id' />
                            </p>

                            <p>
                                <label>  <b>Name: </b></label>
                                <Field type="text" name='name' />
                                <ErrorMessage name='name' />
                            </p>

                            <p>
                                <label> <b>Age :</b></label>
                                <Field type="text" name='age' />
                                <ErrorMessage name='age' />
                            </p>
                            <p>
                                <label> <b>Email :</b></label>
                                <Field type="text" name='email' />
                                <ErrorMessage name='email' />
                            </p>
                            <p>
                                <label> <b>Desg :</b></label>
                                <Field as='select' name='desg'>
                                    <option value='select'>---select---</option>
                                    <option value='Junior Software Engg'>Junior Software Engg</option>
                                    <option value='Asso. Software Engg'>Asso. Software Engg</option>
                                    <option value='Senior Software Engg'>Senior Software Engg</option>
                                </Field>
                                <ErrorMessage name='desg' />
                            </p>
                            <button type='submit' disabled={!propertiez.isValid}>Formik Comp Add Employee</button>
                        </Form>
                    );
                }
            }


        </Formik>
    )

}
