// Home.js
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div>
        <form>
          <h2>login</h2>
          <input type='text/plain' placeholder='username' required/>
          <input type='password' placeholder='password' required />
          <button type='submit'>submit</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
