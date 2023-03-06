import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/minty/bootstrap.min.css";
import './homepage.css'
import("bootstrap");

const Homepage = () => {
    return (
        
        <div>
        
        <head>
            <title>Homepage</title>
            <meta charset="UTF-8" />
        </head>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Resources</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="search" placeholder="Search"></input>
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        <body>
        <h1 id="heading">Homepage</h1>

        <hr />
        <br />
        <br />

        <button class="btn btn-primary" id="match">Match</button>

        <br />
        <br />
        <hr />
        <br />
        <br />

        <h3></h3>

        <div id="bottom">
            <button class="btn btn-lg btn-primary" >Profile</button>
            <button class="btn btn-lg btn-primary">Chat</button>
            <button class="btn btn-lg btn-primary">Events</button>
        </div>
        </body>
        </div>
    );
};

export default Homepage;