import React from 'react';
import Logo from '../components/Logo.js';
import Messages from '../components/Messages';

function HomePage() {
  return (
    <div>
        <Logo />
        <h1>popeye</h1>
        <p>the developer</p>
        <Messages />
    </div>
  );
}

export default HomePage;
