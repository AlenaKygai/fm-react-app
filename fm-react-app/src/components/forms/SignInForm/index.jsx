import React from 'react';
import { Form, Formik } from 'formik';
import cx from 'classnames';
import styles from './SignInForm.module.css';
import {SIGN_IN_SCHEMA} from '../../../utils/schemaValidation';
import InputWrapper from '../InputWrapper';

const initialValues = {
  email: '',
  password: '',
}

const SignInForm = (props) => {
  const onSubmit = (values,formikBag) =>{
    console.log('values:', values);
    console.log('formikBag:', formikBag);
    formikBag.resetForm();
  }
    return (
      <Formik initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={SIGN_IN_SCHEMA}>
        {
          (formikProps) =>{
            return(
              <Form>
                <InputWrapper name='email' placeholder='Email'/>
                <InputWrapper name='password' type='password' placeholder='Password'/>
                <InputWrapper name='password2' type='password' placeholder='Confirm Password'/>
                <input type="submit"  value='Sign in'/>
              </Form>
            )
          }
        }
      </Formik>
    );
  
}

export default SignInForm;
