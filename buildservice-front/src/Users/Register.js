import axios from 'axios'
import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
  let navigate = useNavigate()

  const [user, setUser] = useState({
    name:"",
    lastName:"",
    email:"",
    phoneNumber:"",
    password:""
  })

  const{name, lastName, email, phoneNumber, password} = user

  const onInputChange = (e) =>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  
  const onSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:8080/users", user)
    navigate("/users")
  }

  return (
    <div className='container'>
        <div className='row'>
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className='text-center m-4'>Create account</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='from-label'>
                            Name
                        </label>
                        <input type={"text"} className="form-control" 
                                placeholder='Input name' name='name' 
                                value={name} onChange={(e) => onInputChange(e)}/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='LastName' className='from-label'>
                            Last name
                        </label>
                        <input type={"text"} className="form-control" 
                                placeholder='Input last name' name='lastName'
                                value={lastName} onChange={(e) => onInputChange(e)}/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='Email' className='from-label'>
                            Email
                        </label>
                        <input type={"email"} className="form-control" 
                                placeholder='Input email address' name='email'
                                value={email} onChange={(e) => onInputChange(e)}/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='Phonenumber' className='from-label'>
                            Phonenumber
                        </label>
                        <input type={"text"} className="form-control" 
                                placeholder='Input phone number' name='phoneNumber'
                                value={phoneNumber} onChange={(e) => onInputChange(e)}/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='Password' className='from-label'>
                            Password
                        </label>
                        <input type={"password"} className="form-control" 
                                placeholder='Input password' name='password'
                                value={password} onChange={(e) => onInputChange(e)}/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='ConfirmPassword' className='from-label'>
                            Confirm password
                        </label>
                        <input type={"password"} className="form-control" 
                                placeholder='Confirm password' name='confirmpassword'/>
                    </div>

                    <button type="submit" className='btn btn-primary'>
                        Submit
                    </button>

                    <Link className='btn btn-danger mx-2' to="/">
                        Cancel
                    </Link>
                </form>    
            </div>
        </div>
    </div>
  )
}

  
