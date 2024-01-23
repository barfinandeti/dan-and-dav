// Home.js
import React from 'react';
import '../styles/home.css'

export const Home = () => {
  return <section>
    <div className='row'>
      <div className='col'>
        <h4>lorem</h4>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Tincidunt dictum ac amet lectus eu commodo. Amet lorem enim senectus eu enim arcu morbi. Tellus leo lectus proin cras feugiat mauris suspendisse. Ac fermentum ut sed a in. Facilisis sodales eu quis at quis iaculis.</p>
        <button className='btn'>lorem</button>
      </div>
      <div className='col'>
        <img className='heroimg' src="heroimg.png" alt="hero image" />
        <h1>this is second row</h1>
      </div>
    </div>
  </section>
};

export default Home;
