import React from 'react';

function Home({ message }) {
  return (
    <div className="home">
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default Home;