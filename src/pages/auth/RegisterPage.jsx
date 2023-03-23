import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Button, TextField} from '@mui/material';
import axios from 'axios';

const RegisterPage = () => {

    const initialCredentials = {
        id:'',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        dateOfBirth: ''
    }

    const registerSchema = Yup.object().shape(
        {
            id: Yup.string(),
            firstName: Yup.string()
                .required('FirstName is required'),
            lastName: Yup.string()
                .required('LastName is required'),
            email: Yup.string()
                .email('Valid email is required')
                .required('Email is required'),
            password: Yup.string()
                .min(10, 'The password must have minimum of 10 characters')
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Password must be the same')
                .required('ConfirmPassword is required'),
            dateOfBirth: Yup.date()
                .max(new Date(), 'Date cant be in the future')
                .required('Date is required')
        }
    )

    const handleRegister = async (values) => {
        try {
          const response = await axios.post('localhost:8080/v1/api/user/', values);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }

  return (
    <div className='register-form'>
        <h1 className='register-title'>Registrate</h1>
        <h2 className='registre-subtitle'>"¡Únete a la fiesta más exclusiva de la</h2>
        <h2 className='registre-subtitle'>ciudad y regístrate ahora para no"</h2>
        <h2 className='registre-subtitle'>perderte ni un solo evento!</h2>
        <Formik 
            initialValues={initialCredentials}
            validationSchema={registerSchema}
            onSubmit={handleRegister}>
            {({values, errors, touched})=>(
                <Form className='register-input-text'>
                    <div>
                        <ErrorMessage name="firstName" component='div' style={{ color: 'red' }} />
                        <Field as={TextField} margin="normal"
                            id="firstName"
                            name="firstName"
                            placeholder="firstName"
                            type="firstName">
                        </Field>
                        <ErrorMessage name="firstName" component='div' style={{ color: 'red' }}/>
                        <Field as={TextField} margin="normal"
                            id="lastName"
                            name="lastName"
                            placeholder="lastName"
                            type="lastName">
                        </Field>
                        <ErrorMessage name="lastName" component='div' style={{ color: 'red' }}/>
                    </div>
                    <div>
                        <Field as={TextField} fullWidth margin="normal"
                            id="email"
                            name="email"
                            placeholder="email"
                            type="email">
                        </Field>
                        <ErrorMessage name="email" component='div' style={{ color: 'red' }}/>
                    </div>
                    <div>
                        <Field as={TextField} fullWidth margin="normal"
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password">
                        </Field>
                        <ErrorMessage name="password" component='div' style={{ color: 'red' }}/>
                    </div>
                    <div>
                        <Field as={TextField} fullWidth margin="normal"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="confirmPassword"
                            type="confirmPassword">
                        </Field>
                        <ErrorMessage name="confirmPassword" component='div' style={{ color: 'red' }}/>
                    </div>
                    <div>
                        <Field as={TextField} fullWidth margin="normal"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            type="date">
                        </Field>
                        <ErrorMessage name="dateOfBirth" component='div' style={{ color: 'red' }}/>
                    </div>
                    <h4>Al hacer click en "Registrarse" acepta nuestras</h4>
                    <h4>Condiciones,la Política de privacidad y la Política de cookies</h4>
                    <Button type="submit" variant="contained" color="success" fullWidth >Registrarse</Button>
                </Form> 
            )}
        </Formik>
    </div>
  )
}
export default RegisterPage