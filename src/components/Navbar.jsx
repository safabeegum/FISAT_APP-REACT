import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-light">     
        <div class="container-fluid">
        <img src="https://pbs.twimg.com/profile_images/720494732800094208/NA9smzel_400x400.jpg" alt="Logo" width="65" height="75" class="d-inline-block align-text-top"></img>
        <a class="navbar-brand text-primary">FEDERAL INSTITUTE OF SCIENCE AND TECHNOLOGY</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">HOME</a>
        </li>
        
        <li class="nav-item">
        <a class="nav-link" href="#">ADD STUDENT</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">SEARCH STUDENT</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">DELETE STUDENT</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">VIEW STUDENT</a>
        </li>
        </ul>
        <br></br>
        </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar