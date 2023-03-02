import axios from 'axios'
import React, { useState } from 'react'
import { set, useForm } from 'react-hook-form'
import { Link, NavLink } from 'react-router-dom'
import defaultValues from '../utils/defaultValues'

export const Login = () => {
    const [token, setToken] = useState()
    const {register, handleSubmit, reset} = useForm()
    const submit = (data) => {
        const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users/login"
        axios.post(url, data)
        .then(res => {console.log(res.data)
            setToken(res.data.token)
        localStorage.setItem("token", res.data.token)
    localStorage.setItem("name", `${res.data.user.firstName} ${res.data.user.lastName}`)})
        .catch(err => {console.log(err)
        localStorage.clear()})
        reset(defaultValues)
    }

    const handleLogout = () => {
        localStorage.clear()
        setToken()
    }
       

    if(localStorage.getItem("name")){
        return <div>
            <p>usuario {localStorage.getItem("name")} registrado</p>
            <button onClick={handleLogout}>logout</button>
        </div>
    } else {
        return (
            <div>
                <form onSubmit={handleSubmit(submit)}>
                    <h2>Form login</h2>
                    <div>
                        <label htmlFor="email">email</label>
                        <input {...register("email")} type="text" id='email' />
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <input {...register("password")} type="text" id='password' />
                    </div>
                    <button>login</button>
                </form>
                <Link to="/user/register">click to register</Link>
            </div>
          )
    }
  
}
