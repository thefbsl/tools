import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Items</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
              
                <Link className='btn btn-outline-light' to="/addItem"> Add item </Link>
                <Link className='btn btn-outline-light' to="/signup"> Create account </Link>
                <Link className='btn btn-outline-dark' to="/users"> Users </Link>
            </div>
        </nav>
    </div>
  )
}
