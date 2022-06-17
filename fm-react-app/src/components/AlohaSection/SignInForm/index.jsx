import React from 'react';
import { Field, Form, Formik } from 'formik';
import cx from 'classnames';
import styles from './SignInForm.module.css';
import {SIGN_IN_SCHEMA} from '../../utils/schemaValidation';

const initialValues = {
  email: '',
  password: '',
}

const SignInForm = (props) => {
  const onSubmit = (values,formikBag) =>{
    console.log('values:', values);
    console.log('formikBag:', formikBag);
  }
    return (
      <Formik initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={SIGN_IN_SCHEMA}>
        {
          (formikProps) =>{
            return(
              <Form>
                <Field name='email'/>
                <Field name='password'/>
                <input type="submit"  value='Sign in'/>
              </Form>
            )
          }
        }
      </Formik>
    );
  
}

export default SignInForm;
