import React from 'react';
  
const SignUp = () => {
  return (
    <div>
      <h1 id="title">Create Account</h1>
      <div>
        <div class="info">
          <label for="first-name" id="first-name"
            >Enter your first name:
          </label>
          <input type="text" name="first-name" required />
        </div>
        <div class="info">
          <label for="last-name">Enter your last name: </label>
          <input type="text" name="last-name" id="last-name" required />
        </div>


        <div class="info">
          <label for="birthday">Birthday: </label>
          <input type="date" id="birthday" name="birthday" required />
        </div>


        <div class="info">
          <p>What is your gender:</p>

          <input type="radio" name="gender" value="female" />
          <label for="gender">Female </label><br />

          <input type="radio" name="gender" value="male" />
          <label for="gender">Male</label><br />

          <input type="radio" name="gender" value="more" />
          <label for="gender">More</label>
        </div>


        <div class="info">
          <label for="email">Enter your email: </label>
          <input type="email" name="email" required />
        </div>
        </div>
    </div>
  );
};
  
export default SignUp;