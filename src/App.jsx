import './App.css';
import 'tailwindcss/tailwind.css';
import React from 'react';

function App() {
  return (
    <div style={{ backgroundColor: 'beige' }}>
      <div className="banner">
        <div className="logo-container">
          <img src="statefarmlogo.png" alt="Logo" className="logo" />
        </div>
      </div>
      <div>
        <div className="profile-info">
          <img className="profile-icon" src="profileicon.png" />
          <h1 className="profile-name">Jane Doe</h1>
        </div>
        <div>
          <p className="profile-in">Email: abcde@gmail.com | Phone: (123) 456-7890</p>
        </div>
      </div>
      
      <div className="flex justify-center items-center">
        <div className="mr-8">
          <h1 className="header">Grover's Insights</h1>
          <img className="profile-in" src="grover.png" alt="Circle Background" width="200" height="200" />
        </div>
        <div className="relative">
          <div className="grover-grey-rectangle absolute z-100"></div>
          <div className="grover-green-rectangle z-100"></div>
        </div>
      </div>

      <h1 className="header">Sensor Graphs</h1>
      <div className="flex justify-center">
        <img className='profile-in mr-8' src="humidity.png" style={{ width: '30%', height: 'auto' }} />
        <img className='profile-in mr-8' src="temp.png" style={{ width: '30%', height: 'auto' }} />
        <img className='profile-in' src="motion.png" style={{ width: '30%', height: 'auto' }} />
      </div>

      
    </div>
  );
}

export default App;
