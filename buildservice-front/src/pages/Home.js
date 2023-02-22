import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
 

export default function Home() {
    const [items, setItems] = useState([])
    const [sortDirection, setSortDirection] = useState("asc");

    useEffect(() => {
        loadItems()
    }, [])

    const loadItems = async() => {
        const result = await axios.get("http://localhost:8080/items/get")
        console.log(result.data)
        setItems(result.data)
    }

    const handleSortClick = async (direction) => {
      setSortDirection(direction);
      const endpoint = direction === "asc" ? "sort" : "sortdesc";
      const result = await axios.get(`http://localhost:8080/items/${endpoint}`);
      console.log(result.data);
      setItems(result.data);
    };

    const deleteItem = async(id) => {
      axios.delete(`http://localhost:8080/items/${id}`)
      loadItems()
   }

   
  return (
    <div className="container">
      <div className="btn-group mb-3">
        <button
          type="button"
          className={`btn ${sortDirection === "asc" ? "btn-primary active" : "btn-outline-primary"}`}
          onClick={() => handleSortClick("asc")}
        >
          Ascending order
        </button>
        <button
          type="button"
          className={`btn ${sortDirection === "des" ? "btn-primary active" : "btn-outline-primary"}`}
          onClick={() => handleSortClick("des")}
        >
          Descending order
        </button>
      </div>

      
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {items.map((item) => (
            <div className="col">
            <div className="card shadow-sm">
                <img src={item.imageUrl}></img>
                <div className="card-body">
                <p className="card-text">{item.name}</p>
                <p className="card-text">{item.cost} T</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <Link
                        className="btn btn-primary mx-2"
                        to={`/viewitem/${item.id}`}>
                         View
                    </Link>
                    <button className='btn btn-danger'
                            onClick={() => deleteItem(item.id)}>Delete</button>
                    </div>
                </div>
                </div>
            </div>
            </div>  
        ))}             
      </div>
    </div>
  )
}
