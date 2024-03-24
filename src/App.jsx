
import './App.css'
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
      <div>
        <pdf-viewer>
          <p>Inner elements</p>
        </pdf-viewer>
      </div>
    </div>
  )
}

export default App
