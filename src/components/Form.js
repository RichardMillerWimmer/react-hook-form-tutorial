import React from 'react';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const formScheme = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email().required('Email is required'),
    age: yup.number().positive().integer('Age is required'), 
    password: yup.string().min(8).max(15).required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null])
})

const Form = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(formScheme)})


    const submitForm = (data) => {
        console.log(data)
    }

    return (
        <div className='Form'>
            <h1>React-Hook-Form</h1>
            <div className='inputs'>
                <form onSubmit={handleSubmit(submitForm)}>
                    <input type='text' {...register('firstName')} placeholder='First Name' />
                    <p>{errors.firstName?.message}</p>
                    <input type='text' {...register('lastName')} placeholder='Last Name' />
                    <p>{errors.lastName?.message}</p>
                    <input type='text' {...register('email')} placeholder='Email' />
                    <p>{errors.email?.message}</p>
                    <input type='text' {...register('age')} placeholder='Age' />
                    <p>{errors.age?.message}</p>
                    <input type='password' {...register('password')} placeholder='Password' />
                    <p>{errors.password?.message}</p>
                    <input type='password' {...register('confirmPassword')} placeholder='Confirm Password' />
                    <p>{errors.confirmPassword && 'Password must match!'}</p>
                    <input type='submit' id='submit' />
                </form>
            </div>
        </div>
    )
}

export default Form
