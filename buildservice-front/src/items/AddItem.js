import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
  let navigate = useNavigate()

  const [item, setItem] = useState({
    name: "",
    cost: "",
    category: "",
    description: "",
    city: "",
    district: "",
    imageUrl: ""
  })

  const{name, cost, category, description, city, district, imageUrl} = item

  const onInputChange = (e) =>{
    setItem({...item,[e.target.name]:e.target.value})
  }
  
  const onSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:8080/items", item)
    navigate("/")
  }

  return (
    <div className='container'>
        <div className='row'>
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className='text-center m-4'>Add item</h2>
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
                        <label htmlFor='Cost' className='from-label'>
                            Cost
                        </label>
                        <input type={"number"} className="form-control" 
                                placeholder='Input cost' name='cost'
                                value={cost} onChange={(e) => onInputChange(e)}/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='Category' className='from-label'>
                        Category
                        </label>
                        <input type={"text"} className="form-control" 
                                placeholder='Input category' name='category'
                                value={category} onChange={(e) => onInputChange(e)}/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='Description' className='from-label'>
                        Description
                        </label>
                        <input type={"text"} className="form-control" 
                                placeholder='Input description' name='description'
                                value={description} onChange={(e) => onInputChange(e)}/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='City' className='from-label'>
                        City
                        </label>
                        <input type={"text"} className="form-control" 
                                placeholder='Input city' name='city'
                                value={city} onChange={(e) => onInputChange(e)}/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='District' className='from-label'>
                        District
                        </label>
                        <input type={"text"} className="form-control" 
                                placeholder='Input district' name='district'
                                value={district} onChange={(e) => onInputChange(e)}/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='Image' className='from-label'>
                        Image
                        </label>
                        <input type={"text"} className="form-control" 
                                placeholder='Input image' name='imageUrl'
                                value={imageUrl} onChange={(e) => onInputChange(e)}/>
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

  
