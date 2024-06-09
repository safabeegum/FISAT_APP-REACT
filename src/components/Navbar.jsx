import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-tertiary ">     
        <div class="container-fluid">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/FISAT_LOGO.png" alt="Logo" width="155" height="130" class="d-inline-block align-text-top"></img>
        <a class="navbar-brand text-primary fw-bold fs-3">FEDERAL INSTITUTE OF SCIENCE AND TECHNOLOGY</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/">HOME</Link>
        </li>
        
        <li class="nav-item">
        <Link class="nav-link" to="/add">ADD STUDENT</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/search">SEARCH STUDENT</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/delete">DELETE STUDENT</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/viewall">VIEW STUDENT</Link>
        </li>
        </ul>
        </div>
        </div>
        </nav>
        <hr class="border border-primary border-1 opacity-50"></hr>
    </div>
    
  )
}

export default Navbar