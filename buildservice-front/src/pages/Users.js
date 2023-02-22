import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
 

export default function Users() {
    const [users, setusers] = useState([])

    const {id} = useParams()

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async() => {
        const result = await axios.get("http://localhost:8080/users/get")
        console.log(result.data)
        setusers(result.data)
    }

    const deleteUser = async(id) => {
       axios.delete(`http://localhost:8080/users/${id}`)
       loadUsers()
    }


  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Last name</th>
                <th scope="col">email</th>
                <th scope="col">phone number</th>
                </tr>
            </thead>
            <tbody>

                {users.map((user, index) => (
                        <tr>
                        <th scope="row" key={index}>{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        <td>
                            <button className='btn btn-primary'>View</button>
                            <Link className='btn btn-primary-outline'
                             to={`/edituser/${user.id}`}>Edit</Link>
                            <button className='btn btn-danger'
                            onClick={() => deleteUser(user.id)}>Delete</button>
                        </td>
                        </tr>
                    ))}        
            </tbody>
            </table>

        </div>
    </div>
  )
}
