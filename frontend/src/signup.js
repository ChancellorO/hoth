import React from 'react';
import "bootswatch/dist/minty/bootstrap.min.css";
import {
    Link
  } from "react-router-dom";
import "./signup.css";
  
const SignUp = () => {
  return (
    <form method="post" action="/api/users/">
    <div>
      <h1 id="title">Create Account</h1>
      <div>
        <div class="info">
        <label for="exampleInputEmail1" class="mx-2 form-label mt-4">Name</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"></input>
        </div>
        <div class="info">
        <label for="exampleInputEmail1" class="mx-2 form-label mt-4">School</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter School"></input>
        </div>

        <label for="exampleInputEmail1" class="mx-2 form-label mt-4">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>


        {/* <div class="info">
          <p>What is your gender:</p>

          <input type="radio" name="gender" value="female" />
          <label for="gender">Female </label><br />

          <input type="radio" name="gender" value="male" />
          <label for="gender">Male</label><br />

          <input type="radio" name="gender" value="more" />
          <label for="gender">More</label>
        </div> */}


        {/* <div class="info">
          <label for="email">Enter your email: </label>
          <input type="email" name="email" required />
        </div>*/}
        </div> 
    </div>
    <input type="submit" value="Submit" onclick="window.location.href = 'http://localhost:3000/'" >
        
    </input>
    {/* <Link to="/">Submit</Link> */}
    </form>
  );
};
  
export default SignUp;