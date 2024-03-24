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
          <p className="profile-in">Email: abcde@gmail.com | Phone: (123)456-7890</p>
        </div>
      </div>
      
      <div className="flex justify-center items-center">
        <div className="mr-8">
          <h1 className="header">Grover's Insights</h1>
          <img className="profile-in" src="whitecircle.png" alt="Circle Background" width="200" height="200" />
        </div>
        <div className="relative">
          <div className="grover-grey-rectangle absolute z-100"></div>
          <div className="grover-green-rectangle z-100"></div>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
