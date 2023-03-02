import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from '../utils/defaultValues'

const Register = () => {
    const {register, handleSubmit, reset} = useForm() 
    const submit = (data) => {
        const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users"
        axios.post(url, data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
        reset(defaultValues)
    }
  
    return (
    
    <div>
        <form onSubmit={handleSubmit(submit)}>
           <div>
            <label htmlFor="firstName">first name</label>
            <input {...register("firstName")} type="text" id='firstName' />
           </div>
           <div>
            <label htmlFor="lastName">last name</label>
            <input {...register("lastName")} type="text" id='lastName' />
           </div>
           <div>
            <label htmlFor="email">email</label>
            <input {...register("email")} type="text" id='email' />
           </div>
           <div>
            <label htmlFor="password">password</label>
            <input {...register("password")} type="password" id='password' />
           </div>
           <div>
            <label htmlFor="phone">phone</label>
            <input {...register("phone")} type="text" id='phone' />
            </div>
            <button typeof='submit'>register</button>

        </form>
    </div>
  )
}

export default Register